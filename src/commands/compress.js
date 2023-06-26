import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream';

export const compress = async (pathToFile, pathToDestination) => {
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToDestination);
  const brot = createBrotliCompress();

  pipeline(source, brot, destination, (error) => {
    if (error) {
      throw Error(error);
    }
  });
};
