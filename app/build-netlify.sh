#!/bin/bash

# Netlify Build Script for Sully Booking System
echo "🚀 Starting Netlify build process..."

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Generate Prisma Client
echo "🗄️  Generating Prisma client..."
npx prisma generate

# Build the application
echo "🔨 Building Next.js application..."
npm run build

echo "✅ Build completed successfully!"
