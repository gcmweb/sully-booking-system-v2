
#!/bin/bash

# Netlify Build Script for Sully Booking System
echo "🚀 Starting Netlify build process..."

# Install dependencies with legacy peer deps to avoid conflicts
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Generate Prisma Client with explicit permissions
echo "🗄️  Generating Prisma client..."
npx prisma generate --schema=./prisma/schema.prisma

# Verify Prisma Client was generated
if [ ! -d "node_modules/.prisma" ]; then
  echo "❌ Prisma client generation failed"
  exit 1
fi

# Build the application
echo "🔨 Building Next.js application..."
npm run build

echo "✅ Build completed successfully!"
