import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// This script converts all .jpeg/jpg and .png images in the specified directory to .webp format using the sharp library. 
// Adjust the quality setting as needed for a balance between image quality and file size.


const directory = './src/img/'; // Your image folder

fs.readdirSync(directory).forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
        const filePath = path.join(directory, file);
        const newFilePath = filePath.replace(/\.(jpe?g|png)$/, '.webp');

        sharp(filePath)
            .webp({ quality: 80 }) // Adjust quality vs size here
            .toFile(newFilePath)
            .then(() => console.log(`Converted: ${file} -> ${path.basename(newFilePath)}`))
            .catch(err => console.error(`Error converting ${file}:`, err));
    }
});