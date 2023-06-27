import { createReadStream, createWriteStream } from 'fs';
import path from 'node:path';

export const cp = async (pathToFile, pathToNewDirectory) => {
  const readStream = createReadStream(path.resolve(pathToFile), 'utf8');
  const outputFile = createWriteStream(
    path.join(pathToNewDirectory, path.parse(path.resolve(pathToFile)).base)
  );
  for await (const chunk of readStream) {
    outputFile.write(chunk);
  }

  readStream.on('error', function (error) {
    throw Error(error);
  });

  outputFile.on('error', function (error) {
    throw Error(error);
  });
};
