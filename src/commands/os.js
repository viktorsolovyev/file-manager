import * as os from 'node:os';

export const oscmds = async (args) => {
  const command = args.replace('--', '');

  if (command == 'cpus') {
    const cpusArray = os
      .cpus()
      .map((item) => ({
        Model: item.model,
        Speed: `${item.speed / 1000} GHz`,
      }));
    console.log(`Overall amount of CPUS: ${os.cpus().length}`);
    console.table(cpusArray);
  }
};
