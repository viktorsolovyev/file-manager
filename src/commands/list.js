import { readdir } from 'fs/promises';

export const list = async (folderPath) => {
  let listArray = [];
  try {
    const files = await readdir(folderPath, { withFileTypes: true });
    for (const file of files) {
      listArray.push({
        Name: file.name,
        Type: file.isFile() ? 'file' : 'directory',
      });
    }
    listArray.sort((a, b) => {
      if (a.Type != b.Type && a.Type == 'directory') return -1;
      a.Name.localeCompare(b.Name);
    });
    console.table(listArray);
  } catch {
    console.log('Operation failed');
  }
};
