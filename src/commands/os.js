import * as os from 'node:os';

export const oscmds = async (command) => {
  if (command == '--cpus') {
    const cpusArray = os.cpus().map((item) => ({
      Model: item.model,
      Speed: `${item.speed / 1000} GHz`,
    }));
    console.log(`Overall amount of CPUS: ${os.cpus().length}`);
    console.table(cpusArray);
  }

  if (command == '--homedir') {
    console.log(os.homedir());
  }

  if (command == '--EOL') {
    console.log(JSON.stringify(os.EOL));
  }

  if (command == '--username') {
    console.log(os.userInfo().username);
  }

  if (command == '--architecture') {
    console.log(os.arch());
  }
};
