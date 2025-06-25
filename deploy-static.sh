#!/bin/bash

# V-Accel Static Deployment Script
echo "🚀 Deploying V-Accel static application..."

# Configuration
PROJECT_DIR=$(dirname "$0")
BUILD_DIR="$PROJECT_DIR/out"
DEPLOY_DIR="/var/www/v-accel"  # Change this to your desired deployment directory
NGINX_CONFIG_SOURCE="$PROJECT_DIR/nginx-static.conf"
NGINX_CONFIG_DEST="/etc/nginx/sites-available/v-accel"
NGINX_CONFIG_ENABLED="/etc/nginx/sites-enabled/v-accel"

cd "$PROJECT_DIR"

# Step 1: Build the application
echo "🔨 Building static application..."
npm run build

# Check if build was successful
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Build failed. No 'out' directory found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Step 2: Create deployment directory
echo "📁 Creating deployment directory..."
sudo mkdir -p "$DEPLOY_DIR"

# Step 3: Copy files to deployment directory
echo "📋 Copying files to deployment directory..."
sudo cp -r "$BUILD_DIR"/* "$DEPLOY_DIR/"

# Step 4: Set proper permissions
echo "🔐 Setting proper permissions..."
sudo chown -R www-data:www-data "$DEPLOY_DIR"
sudo chmod -R 755 "$DEPLOY_DIR"

# Step 5: Copy nginx configuration
echo "⚙️  Setting up nginx configuration..."
sudo cp "$NGINX_CONFIG_SOURCE" "$NGINX_CONFIG_DEST"

# Step 6: Enable the site
if [ ! -L "$NGINX_CONFIG_ENABLED" ]; then
    sudo ln -s "$NGINX_CONFIG_DEST" "$NGINX_CONFIG_ENABLED"
fi

# Step 7: Test nginx configuration
echo "🧪 Testing nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid!"
    
    # Step 8: Reload nginx
    echo "🔄 Reloading nginx..."
    sudo systemctl reload nginx
    
    echo "🎉 Deployment completed successfully!"
    echo "📍 Your application is now available at:"
    echo "   - http://your-domain.com (replace with your actual domain)"
    echo "   - Files are located in: $DEPLOY_DIR"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Update your domain in $NGINX_CONFIG_DEST"
    echo "   2. Consider setting up SSL certificates for HTTPS"
    echo "   3. Update DNS records to point to your server"
else
    echo "❌ Nginx configuration test failed!"
    echo "Please check the configuration file: $NGINX_CONFIG_DEST"
    exit 1
fi 