import { createReadStream } from 'fs';
import path from 'node:path';

export const cat = async (filePath) => {
  const absoluteFilePath = path.resolve(path.normalize(filePath));
  const readStream = createReadStream(absoluteFilePath, 'utf8');
  for await (const chunk of readStream) {
    console.log(chunk);
  }

  readStream.on('error', function (error) {
    process.stdout.write(`${error.message}\n> `);
  });
};
