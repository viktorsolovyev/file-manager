import { cp } from './cp.js';
import { rm } from './rm.js';

export const mv = async (pathToFile, pathToNewDirectory) => {
  try {
    await cp(pathToFile, pathToNewDirectory);
    await rm(pathToFile);
  } catch (error) {
    throw Error(error);
  }
};
