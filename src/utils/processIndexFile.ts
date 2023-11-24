import fs from 'fs';
import path from 'path';
import readline from 'readline';
import downloadFile from './downloadFile';

export default async function processIndexFile() {
  const indexFilePath = path.join(process.cwd(), 'tmp', 'index.txt');
  const baseURL = 'https://challenges.coode.sh/food/data/json/';

  try {
    if (!fs.existsSync(indexFilePath)) {
      console.error('Arquivo index.txt não encontrado.');
      return;
    }

    const readInterface = readline.createInterface({
      input: fs.createReadStream(indexFilePath),
    });

    readInterface.on('line', async (fileName: string) => {
      await downloadFile(baseURL, fileName);
    });

    readInterface.on('close', () => {
      console.log('Processamento do arquivo index.txt concluído.');
    });
  } catch (error) {
    console.error('Erro ao processar o arquivo index.txt:', error.message);
  }
}