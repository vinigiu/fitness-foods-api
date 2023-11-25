import fs from 'fs';
import path from 'path';

export function cleanTmp() {
  const tmpDir = path.join(process.cwd(), 'temp');
  console.log("Entrei no cleanTemp!")
  try {
    removeDir(tmpDir);
    console.log('conteúdo da pasta temp excluída com sucesso.');
  } catch (error) {
    console.error('Erro ao excluir a conteúdo da pasta temp:', error.message);
    throw error;
  }
}

function removeDir(dir: string) {
    const entries = fs.readdirSync(dir);
  
    for (const entry of entries) {
      const entryPath = path.join(dir, entry);
      
      fs.unlinkSync(entryPath);
    }
  }