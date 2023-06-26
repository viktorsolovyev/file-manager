import { stdin as input, stdout as output, argv } from 'node:process';
import * as readline from 'node:readline';
import * as os from 'node:os';

const state = {
  username: 'Anonymous',
  cwd: os.homedir(),
};

const printCWD = () => {
  console.log(`You are currently in ${state.cwd}`);
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

  rl.on('line', (text) => {
    if (text == '.exit') {
      rl.close();
      exit();
    }
    console.log(text);
  })
    .on('SIGINT', () => {
      exit();
    })
    .on('close', () => {
      exit();
    });
};

await index();
