import { createHmac } from 'node:crypto';
import { readFile } from "fs/promises";

export const hash = async (pathToFile) => {
  try {
    let contents = await readFile(pathToFile, { encoding: 'utf8' });
    const secret = 'abcdefg';
    const hash = createHmac('sha256', secret).update(contents).digest('hex');
    console.log(hash);
  } catch (error) {
    throw Error(error);
  }
};
