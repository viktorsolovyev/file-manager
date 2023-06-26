import { stdin as input, stdout as output, argv } from 'node:process';
import * as readline from 'node:readline';
let username = 'Anonymous';

const exit = function () {
  output.write(`Thank you for using File Manager, ${username}, goodbye!\n`);
  process.exit(0);
};

const index = async () => {
  let usernameArgv = argv.slice(2, 3).toString();
  if (usernameArgv.indexOf('--username=') > -1) {
    username = usernameArgv.replace('--username=', '');
  }

  console.log(`Welcome to the File Manager, ${username}!`);

  const rl = readline.createInterface({ input, output });

  rl.on('line', (text) => {
    if (text == '.exit') exit();
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
