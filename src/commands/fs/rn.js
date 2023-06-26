import path from 'node:path';
import { rename } from 'fs/promises';

export const rn = async (pathToFile, newFilename) => {
  console.log(pathToFile, newFilename);
  try {
    await rename(
      path.resolve(pathToFile),
      path.join(path.parse(path.resolve(pathToFile)).dir, newFilename)
    );
  } catch (error) {
    throw Error(error);
  }
};
