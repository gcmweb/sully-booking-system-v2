
import { PrismaClient, UserRole, VenueType, SubscriptionPlan, SubscriptionStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create test user
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  // Create SUPER_ADMIN user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@sully.com' },
    update: {},
    create: {
      email: 'admin@sully.com',
      firstName: 'Admin',
      lastName: 'User',
      password: hashedPassword,
      role: UserRole.SUPER_ADMIN,
      isActive: true,
      emailVerified: true,
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
      password: hashedPassword,
      role: UserRole.VENUE_OWNER,
    },
  });

  // Create test venues
  const venue1 = await prisma.venue.upsert({
    where: { slug: 'status-test-venue' },
    update: {},
    create: {
      name: 'Status Test Venue',
      slug: 'status-test-venue',
      description: 'A test restaurant for status testing',
      address: '123 Test Street',
      city: 'Test City',
      postcode: 'TE1 2ST',
      phone: '+44 1234 567890',
      email: 'venue1@test.com',
      venueType: VenueType.RESTAURANT,
      ownerId: user.id,
      isActive: true,
    },
  });

  const venue2 = await prisma.venue.upsert({
    where: { slug: 'the-golden-spoon' },
    update: {},
    create: {
      name: 'The Golden Spoon',
      slug: 'the-golden-spoon',
      description: 'Fine dining restaurant',
      address: '456 Golden Avenue',
      city: 'Golden City',
      postcode: 'GC2 3RD',
      phone: '+44 9876 543210',
      email: 'venue2@test.com',
      venueType: VenueType.RESTAURANT,
      ownerId: user.id,
      isActive: true,
    },
  });

  const venue3 = await prisma.venue.upsert({
    where: { slug: 'updated-test-restaurant' },
    update: {},
    create: {
      name: 'Updated Test Restaurant',
      slug: 'updated-test-restaurant',
      description: 'Updated test restaurant',
      address: '789 Updated Street',
      city: 'Updated City',
      postcode: 'UP3 4TH',
      phone: '+44 5555 123456',
      email: 'venue3@test.com',
      venueType: VenueType.RESTAURANT,
      ownerId: user.id,
      isActive: true,
    },
  });

  // Create subscriptions for venues
  await prisma.subscription.upsert({
    where: { venueId: venue1.id },
    update: {},
    create: {
      venueId: venue1.id,
      plan: SubscriptionPlan.FREE,
      status: SubscriptionStatus.ACTIVE,
      bookingsUsed: 0,
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    },
  });

  await prisma.subscription.upsert({
    where: { venueId: venue2.id },
    update: {
      plan: SubscriptionPlan.PREMIUM,
      status: SubscriptionStatus.ACTIVE,
    },
    create: {
      venueId: venue2.id,
      plan: SubscriptionPlan.PREMIUM,
      status: SubscriptionStatus.ACTIVE,
      bookingsUsed: 1,
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  await prisma.subscription.upsert({
    where: { venueId: venue3.id },
    update: {},
    create: {
      venueId: venue3.id,
      plan: SubscriptionPlan.FREE,
      status: SubscriptionStatus.ACTIVE,
      bookingsUsed: 0,
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  // Create a test widget
  await prisma.bookingWidget.upsert({
    where: { id: 'test-widget-id' },
    update: {},
    create: {
      id: 'test-widget-id',
      name: 'Main Website Widget',
      venueId: venue1.id,
      isActive: true,
      embedCode: `<iframe src="http://localhost:3000/api/widgets/test-widget-id/embed" width="100%" height="600" frameborder="0"></iframe>`,
      settings: {
        theme: 'light',
        primaryColor: '#3b82f6',
        showLogo: true,
        allowedServices: ['DINE_IN', 'TAKEAWAY', 'DELIVERY'],
      },
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
