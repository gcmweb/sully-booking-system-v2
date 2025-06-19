# 🏢 Sully Booking System v2

**A comprehensive venue booking and management system built with Next.js**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account (for payments)

### Installation

```bash
# Clone the repository
git clone https://github.com/gcmweb/sully-booking-system-v2.git
cd sully-booking-system-v2/app

# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Set up database
npx prisma generate
npx prisma db push

# Start development server
yarn dev
```

## 📋 Features

- **🏢 Venue Management**: Complete venue listing and management system
- **📅 Booking System**: Advanced appointment scheduling with calendar integration
- **👥 User Management**: Multi-role user system (customers, venue owners, admins)
- **💳 Payment Integration**: Stripe-powered payment processing
- **📊 Analytics Dashboard**: Comprehensive booking and revenue analytics
- **🔐 Authentication**: Secure JWT-based authentication system
- **📱 Responsive Design**: Mobile-first responsive UI
- **⚡ Performance**: Optimized for speed and scalability

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens
- **Payments**: Stripe integration
- **Deployment**: Netlify-ready with serverless functions

## 📁 Project Structure

```
sully-booking-system-v2/
├── app/                    # Next.js application
│   ├── app/               # App router pages
│   ├── components/        # Reusable components
│   ├── lib/              # Utility functions
│   ├── prisma/           # Database schema
│   └── netlify/          # Netlify functions
├── netlify.toml          # Netlify configuration
└── documentation/        # Comprehensive guides
```

## 🚀 Deployment

This system is optimized for Netlify deployment:

1. **Connect to GitHub**: Link your Netlify account to this repository
2. **Configure Environment**: Set up environment variables in Netlify
3. **Deploy**: Netlify will automatically build and deploy

For detailed deployment instructions, see [DEPLOYMENT_README.md](DEPLOYMENT_README.md)

## 📚 Documentation

- [Quick Start Guide](QUICK_START_GUIDE.md) - Get up and running in 30 minutes
- [Deployment Guide](DEPLOYMENT_README.md) - Complete deployment instructions
- [Database Migration](DATABASE_MIGRATION_GUIDE.md) - Database setup and migration
- [Netlify Functions](NETLIFY_FUNCTIONS_GUIDE.md) - API implementation guide

## 🔧 Configuration

### Environment Variables

```bash
# Database
DATABASE_URL="postgresql://..."

# Authentication
JWT_SECRET="your-jwt-secret"

# Stripe
STRIPE_SECRET_KEY="sk_..."
STRIPE_PUBLISHABLE_KEY="pk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_..."

# Application
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

## 🧪 Testing

```bash
# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run build verification
./BUILD_VERIFICATION_SCRIPT.sh
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the documentation in this repository
- Review the deployment guides
- Check the issue tracker

---

**Built with ❤️ for efficient venue management**