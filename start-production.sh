#!/bin/bash

# V-Accel Production Startup Script
echo "🚀 Starting V-Accel application in production mode..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Navigate to project directory
PROJECT_DIR=$(dirname "$0")
cd "$PROJECT_DIR"

echo "📁 Current directory: $(pwd)"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm ci --only=production
fi

# Build the application if .next doesn't exist or if forced
if [ ! -d ".next" ] || [ "$1" = "--rebuild" ]; then
    echo "🔨 Building application..."
    npm run build
fi

# Check if build was successful
if [ ! -d ".next" ]; then
    echo "❌ Build failed. Please check the build logs."
    exit 1
fi

# Start the application
echo "✅ Starting Next.js application on port 3000..."
echo "🌐 Application will be available at http://localhost:3000"

# Use PM2 if available, otherwise use npm start
if command -v pm2 &> /dev/null; then
    echo "🔄 Using PM2 for process management..."
    pm2 start npm --name "v-accel-app" -- start
    pm2 save
    echo "✅ Application started with PM2. Use 'pm2 status' to check status."
else
    echo "⚠️  PM2 not found. Starting with npm (recommended to install PM2 for production)."
    echo "💡 Install PM2 with: npm install -g pm2"
    npm start
fi 