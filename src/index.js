import { stdin as input, stdout as output, argv } from 'node:process';
import * as readline from 'node:readline';
import * as os from 'node:os';
import { list } from '../src/commands/list.js';
import { oscmds } from '../src/commands/os.js';
import { cat } from '../src/commands/fs/cat.js';

export const state = {
  username: 'Anonymous',
  cwd: os.homedir(),
};

const printCWD = () => {
  output.write(`You are currently in ${state.cwd}\n> `);
};

const exit = () => {
  output.write(
    `Thank you for using File Manager, ${state.username}, goodbye!\n`
  );
  process.exit(0);
};

const startFileManager = async () => {
  const rl = readline.createInterface({ input, output });
  let username = argv.slice(2, 3).toString();
  if (username.indexOf('--username=') > -1) {
    state.username = username.replace('--username=', '');
  }

  console.log(`Welcome to the File Manager, ${state.username}!`);
  printCWD();

  rl.on('line', async (text) => {
    const inputArray = text.split(' ');

    try {
      // exit
      if (text == '.exit') {
        rl.close();
        exit();
      }

      // ls
      if (text == 'ls') {
        await list(state.cwd);
        printCWD();
      }

      // os
      if (inputArray[0] == 'os') {
        await oscmds(inputArray[1]);
        printCWD();
      }

      // cat
      if (inputArray[0] == 'cat') {
        await cat(text.replace('cat ', '').trim());
        printCWD();
      }
    } catch (error) {
      output.write(`${error.message}\n> `);
    }
  })
    .on('SIGINT', () => {
      exit();
    })
    .on('close', () => {
      exit();
    });
};

await startFileManager();
