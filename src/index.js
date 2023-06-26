import { stdin as input, stdout as output, argv } from 'node:process';
import * as readline from 'node:readline';
import * as os from 'node:os';
import { list } from '../src/commands/list.js';
import { oscmds } from '../src/commands/os.js';

const state = {
  username: 'Anonymous',
  cwd: os.homedir(),
};

const printCWD = () => {
  output.write(`You are currently in ${state.cwd}\n>`);
};

const exit = () => {
  output.write(
    `Thank you for using File Manager, ${state.username}, goodbye!\n`
  );
  process.exit(0);
};

const index = async () => {
  let username = argv.slice(2, 3).toString();
  if (username.indexOf('--username=') > -1) {
    state.username = username.replace('--username=', '');
  }

  console.log(`Welcome to the File Manager, ${state.username}!`);
  printCWD();

  const rl = readline.createInterface({ input, output });

  rl.on('line', async (text) => {
    const inputArray = text.split(' ');

    // exit
    if (text == '.exit') {
      rl.close();
      exit();
    }

    // ls
    if (text == 'ls') {
      await list(state.cwd);
    }

    // os
    if (inputArray[0] == 'os') {
      await oscmds(inputArray[1]);
    }

    printCWD();
  })
    .on('SIGINT', () => {
      exit();
    })
    .on('close', () => {
      exit();
    });
};

await index();
