import fs from 'fs';
import path from 'path';

export default function(req, res) {
  const id = req.query.id;
  const filePath = path.join(process.cwd(), `/public/images/${id}.svg`);
  console.log(filePath);
  try {
    const imageBuffer = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(imageBuffer);
  } catch (e) {
    res.status(400).json({ error: true, message: 'Image not found' });
  }
}
