# V-Accel Static Deployment Guide

This guide explains how to deploy your V-Accel application as static HTML files with nginx.

## 📁 Files Overview

- `out/` - Generated static HTML files (created after build)
- `nginx-static.conf` - nginx configuration for static file serving
- `deploy-static.sh` - Full deployment script for server
- `test-static.sh` - Local testing script

## 🚀 Quick Start

### 1. Build Static Files
```bash
npm run build
```

This creates the `out/` directory with all static files.

### 2. Test Locally (Optional)
```bash
chmod +x test-static.sh
./test-static.sh
```

Visit http://localhost:8000 to test your application.

## 🔧 Production Deployment

### Option 1: Manual Deployment

1. **Copy files to your web server:**
   ```bash
   # Copy the 'out' directory to your web server
   scp -r out/ user@your-server:/var/www/v-accel/
   ```

2. **Update nginx configuration:**
   ```bash
   # Copy nginx config to your server
   scp nginx-static.conf user@your-server:/etc/nginx/sites-available/v-accel
   
   # Enable the site
   sudo ln -s /etc/nginx/sites-available/v-accel /etc/nginx/sites-enabled/
   
   # Test and reload nginx
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Option 2: Automated Deployment

1. **Make the deployment script executable:**
   ```bash
   chmod +x deploy-static.sh
   ```

2. **Run the deployment:**
   ```bash
   ./deploy-static.sh
   ```

## ⚙️ nginx Configuration

The `nginx-static.conf` file includes:

- **Static file serving** from the `out/` directory
- **Gzip compression** for better performance
- **Caching headers** for optimal load times
- **Security headers** for protection
- **Fallback routing** for client-side navigation

### Key Configuration Points:

1. **Update the domain:**
   ```nginx
   server_name your-domain.com www.your-domain.com;
   ```

2. **Update the file path:**
   ```nginx
   root /var/www/v-accel/out;
   ```

## 📝 Customization

### Changing Deployment Directory

Edit the `DEPLOY_DIR` variable in `deploy-static.sh`:
```bash
DEPLOY_DIR="/your/custom/path"
```

### Adding Custom Domain

1. Update `nginx-static.conf`:
   ```nginx
   server_name yourdomain.com www.yourdomain.com;
   ```

2. Point your domain's DNS A record to your server's IP address.

### Adding SSL (HTTPS)

1. Obtain SSL certificates (e.g., using Let's Encrypt):
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

2. Or manually configure SSL by uncommenting the HTTPS section in `nginx-static.conf`.

## 🔍 Troubleshooting

### Build Issues

If the build fails:
1. Check for any TypeScript errors
2. Ensure all dependencies are installed: `npm install`
3. Check the console output for specific errors

### nginx Issues

1. **Test configuration:**
   ```bash
   sudo nginx -t
   ```

2. **Check nginx logs:**
   ```bash
   sudo tail -f /var/log/nginx/error.log
   sudo tail -f /var/log/nginx/v-accel_error.log
   ```

3. **Restart nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

### File Permissions

If you get permission errors:
```bash
sudo chown -R www-data:www-data /var/www/v-accel
sudo chmod -R 755 /var/www/v-accel
```

## 📊 Performance Tips

1. **Enable Gzip** (already included in config)
2. **Set proper cache headers** (already included)
3. **Use a CDN** for global distribution
4. **Optimize images** before building
5. **Monitor with tools** like Google PageSpeed Insights

## 🔄 Updating Your Application

To update your deployed application:

1. Make your changes
2. Run the build: `npm run build`
3. Deploy again: `./deploy-static.sh`

## 📞 Support

If you encounter any issues:
1. Check the nginx error logs
2. Verify file permissions
3. Ensure your domain DNS is correctly configured
4. Test locally first using `./test-static.sh`

---

**Note:** This deployment method creates a static website that doesn't require Node.js to run on the server. All the dynamic functionality runs in the browser, making it fast and easy to host on any web server that can serve static files. 