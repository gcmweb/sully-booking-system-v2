
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "../../../../lib/db";
import { requireAuth } from "../../../../lib/auth";
import { UserRole, BookingStatus } from '@prisma/client';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await requireAuth();
    const { id } = params;

    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        venue: true,
        table: true,
        customer: true,
        payments: true,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    // Check permissions
    const hasAccess = 
      user.role === UserRole.SUPER_ADMIN ||
      (user.role === UserRole.VENUE_OWNER && booking.venue.ownerId === user.id) ||
      (user.role === UserRole.CUSTOMER && booking.customerId === user.id);

    if (!hasAccess) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    return NextResponse.json({ booking });
  } catch (error) {
    console.error('Get booking error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch booking' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await requireAuth();
    const { id } = params;
    const body = await request.json();
    const { status, notes } = body;

    const booking = await prisma.booking.findUnique({
      where: { id },
      include: { venue: true },
    });

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    // Check permissions
    const hasAccess = 
      user.role === UserRole.SUPER_ADMIN ||
      (user.role === UserRole.VENUE_OWNER && booking.venue.ownerId === user.id);

    if (!hasAccess) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    const updatedBooking = await prisma.booking.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(notes && { notes }),
      },
      include: {
        venue: true,
        table: true,
        customer: true,
      },
    });

    return NextResponse.json({ booking: updatedBooking });
  } catch (error) {
    console.error('Update booking error:', error);
    return NextResponse.json(
      { error: 'Failed to update booking' },
      { status: 500 }
    );
  }
}
