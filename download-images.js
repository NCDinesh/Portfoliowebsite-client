import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = {
  // Hero and Background Images
  'hero.jpg': 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
  'vision.jpg': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  'events.jpg': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  'media.jpg': 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',

  // News Images
  'news1.jpg': 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  'news2.jpg': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
  'news3.jpg': 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',

  // Team Member Images
  'team1.jpg': 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  'team2.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  'team3.jpg': 'https://images.unsplash.com/photo-1556157382-97eda2d62296',

  // Timeline Images
  'timeline1.jpg': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
  'timeline2.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  'timeline3.jpg': 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  'timeline4.jpg': 'https://images.unsplash.com/photo-1521791136064-7986c2920216'
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {});
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  const imagesDir = path.join(__dirname, 'public', 'images');
  
  // Create images directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Download all images
  for (const [filename, url] of Object.entries(images)) {
    const filepath = path.join(imagesDir, filename);
    try {
      await downloadImage(url, filepath);
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error);
    }
  }
};

downloadAllImages().catch(console.error); 