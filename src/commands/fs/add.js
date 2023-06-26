import { createWriteStream } from 'fs';
import path from 'node:path';
import { state } from '../../index.js';

export const add = async (fileName) => {
  const outputFile = createWriteStream(path.join(state.cwd, fileName));
  outputFile.write('');
};
