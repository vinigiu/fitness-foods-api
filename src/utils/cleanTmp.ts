import fs from 'fs';
import path from 'path';

export default async function cleanTmp() {
  const tmpDir = path.join(process.cwd(), 'tmp');

  try {
    await removeDir(tmpDir);
    console.log('Pasta tmp excluída com sucesso.');
  } catch (error) {
    console.error('Erro ao excluir a pasta tmp:', error.message);
    throw error;
  }
}

async function removeDir(dir: string) {
    const entries = fs.readdirSync(dir);
  
    for (const entry of entries) {
      const entryPath = path.join(dir, entry);
  
      const isDirectory = fs.statSync(entryPath).isDirectory();
  
      if (isDirectory) {
        await removeDir(entryPath);
      } else {
        fs.unlinkSync(entryPath);
      }
    }
  
    fs.rmdirSync(dir);
  }