#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

# Build the application
echo "Building Next.js application..."
npm run build

echo "Build completed successfully!"