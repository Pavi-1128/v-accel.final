const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImages = async () => {
  const publicDir = path.join(__dirname, '../public');
  const dirsToOptimize = ['skills', 'projects', 'work'];
  
  console.log('🚀 Starting image optimization...');
  let totalSaved = 0;
  
  for (const dir of dirsToOptimize) {
    const fullPath = path.join(publicDir, dir);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Directory ${dir} not found, skipping...`);
      continue;
    }
    
    const files = fs.readdirSync(fullPath);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    
    console.log(`📁 Processing ${dir}/ - Found ${imageFiles.length} images`);
    
    for (const file of imageFiles) {
      const inputPath = path.join(fullPath, file);
      const outputPath = path.join(fullPath, `optimized-${file.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp')}`);
      
      try {
        const originalStats = fs.statSync(inputPath);
        const originalSize = originalStats.size;
        
        await sharp(inputPath)
          .resize(800, 600, { 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .webp({ 
            quality: 75,
            effort: 6 
          })
          .toFile(outputPath);
        
        const optimizedStats = fs.statSync(outputPath);
        const optimizedSize = optimizedStats.size;
        const saved = originalSize - optimizedSize;
        const percentage = ((saved / originalSize) * 100).toFixed(1);
        
        totalSaved += saved;
        
        console.log(`✅ ${file} -> optimized-${file.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp')}`);
        console.log(`   ${(originalSize/1024).toFixed(1)}KB -> ${(optimizedSize/1024).toFixed(1)}KB (${percentage}% smaller)`);
        
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
  }
  
  // Optimize specific large images
  const specificImages = [
    'hero-bg.svg',
    'logo.png',
    'contact.png'
  ];
  
  for (const file of specificImages) {
    const inputPath = path.join(publicDir, file);
    
    if (fs.existsSync(inputPath)) {
      const outputPath = path.join(publicDir, `optimized-${file.replace(/\.(png|svg)$/i, '.webp')}`);
      
      try {
        if (file.endsWith('.svg')) {
          // For SVG, we'll just copy it as-is since it's already optimized
          continue;
        }
        
        const originalStats = fs.statSync(inputPath);
        const originalSize = originalStats.size;
        
        await sharp(inputPath)
          .resize(1200, 800, { 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .webp({ 
            quality: 80,
            effort: 6 
          })
          .toFile(outputPath);
        
        const optimizedStats = fs.statSync(outputPath);
        const optimizedSize = optimizedStats.size;
        const saved = originalSize - optimizedSize;
        const percentage = ((saved / originalSize) * 100).toFixed(1);
        
        totalSaved += saved;
        
        console.log(`✅ ${file} -> optimized-${file.replace(/\.png$/i, '.webp')}`);
        console.log(`   ${(originalSize/1024).toFixed(1)}KB -> ${(optimizedSize/1024).toFixed(1)}KB (${percentage}% smaller)`);
        
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`\n🎉 Optimization complete!`);
  console.log(`💾 Total space saved: ${(totalSaved/1024/1024).toFixed(2)}MB`);
  console.log(`\n📝 Next steps:`);
  console.log(`1. Update your components to use optimized-* images`);
  console.log(`2. Remove original large images after testing`);
  console.log(`3. Deploy to see the performance improvements`);
};

optimizeImages().catch(console.error); 