const fs = require('fs');
const path = require('path');

// 1. Read all files in this exact folder
const files = fs.readdirSync(__dirname)
  // 2. Only grab images (ignore other files)
  .filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'))
  // 3. Sort them alphabetically so frame_001 comes before frame_002
  .sort(); 

// 4. Loop through and rename them sequentially (1.jpg, 2.jpg...)
files.forEach((file, index) => {
  const extension = path.extname(file);
  const newName = `${index + 1}${extension}`;
  
  fs.renameSync(
    path.join(__dirname, file), 
    path.join(__dirname, newName)
  );
});

console.log(`🔥 Boom! Renamed ${files.length} images successfully!`);