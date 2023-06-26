import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream';

export const decompress = async (pathToFile, pathToDestination) => {
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToDestination);
  const brot = createBrotliDecompress();

  pipeline(source, brot, destination, (error) => {
    if (error) {
      throw Error(error);
    }
  });
};
