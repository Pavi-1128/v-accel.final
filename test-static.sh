#!/bin/bash

# V-Accel Static Test Script
echo "🧪 Testing V-Accel static application locally..."

PROJECT_DIR=$(dirname "$0")
BUILD_DIR="$PROJECT_DIR/out"

cd "$PROJECT_DIR"

# Check if build directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo "📋 No 'out' directory found. Building application first..."
    npm run build
fi

# Check if build was successful
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Build failed. Cannot start test server."
    exit 1
fi

# Navigate to build directory
cd "$BUILD_DIR"

echo "🌐 Starting local test server..."
echo "📍 Your application will be available at: http://localhost:8000"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Start Python server (works with both Python 2 and 3)
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python is not installed. Please install Python to run the test server."
    echo "💡 Alternatively, you can use any other static file server to serve the 'out' directory."
fi 