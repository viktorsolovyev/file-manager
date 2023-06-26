import { createReadStream } from 'fs';
import path from 'node:path';

export const cat = async (filePath) => {
  const absoluteFilePath = path.resolve(path.normalize(filePath));

  const readStream = createReadStream(absoluteFilePath);
  readStream.on('open', function () {
    readStream.pipe(process.stdout);
  });

  readStream.on('error', function (error) {
    process.stdout.write(`${error.message}\n> `);
  });
};
