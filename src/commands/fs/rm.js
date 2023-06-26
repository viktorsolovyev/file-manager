import { rm as rmPromises } from 'fs/promises';
import path from 'node:path';

export const rm = async (pathToFile) => {
  try {
    await rmPromises(path.resolve(path.normalize(pathToFile)));
  } catch {
    throw Error(error);
  }
};
