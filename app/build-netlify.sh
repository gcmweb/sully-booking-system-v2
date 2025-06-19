#!/bin/bash

# Netlify Build Script for Sully Booking System
echo "🚀 Starting Netlify build process..."

# Set strict error handling
set -e

# Clean any existing Prisma artifacts to avoid permission issues
echo "🧹 Cleaning existing Prisma artifacts..."
rm -rf node_modules/.prisma || true
rm -rf .next || true

# Install dependencies with legacy peer deps to avoid conflicts
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Generate Prisma Client with --no-engine flag for serverless deployment
echo "🗄️ Generating Prisma client for serverless..."
npx prisma generate --no-engine --schema=./prisma/schema.prisma

# Verify Prisma Client was generated
if [ ! -d "node_modules/.prisma" ]; then
  echo "❌ Prisma client generation failed"
  exit 1
fi

echo "✅ Prisma client generated successfully"

# Build the application
echo "🔨 Building Next.js application..."
npm run build

echo "✅ Build completed successfully!"
