import axios from 'axios';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export async function downloadFile(baseUrl: string, fileName: string) {
  const saveDirectory = path.join(process.cwd(), 'temp');

  try {
    if (!fs.existsSync(saveDirectory)) {
      fs.mkdirSync(saveDirectory);
    }

    const response = await axios.get(baseUrl + fileName, {
        responseType: 'stream',
        headers: {
          'Accept-Encoding': 'gzip',
        },
      });

    const savePath = path.join(saveDirectory, fileName);
    
    if (fileName.endsWith('.json.gz')) {
        const writeStream = fs.createWriteStream(savePath.replace('.gz', ''));
        const unzipStream = zlib.createGunzip();
        response.data.pipe(unzipStream).pipe(writeStream);
  
        return new Promise<void>((resolve, reject) => {
          writeStream.on('finish', () => {
            console.log(`Arquivo salvo em: ${savePath.replace('.gz', '')}`);
            resolve();
          });
  
          writeStream.on('error', (err: any) => {
            console.error('Erro ao salvar o arquivo:', err);
            reject(err);
          });
        });
      } else {
        const writeStream = fs.createWriteStream(savePath);
        response.data.pipe(writeStream);
  
        return new Promise<void>((resolve, reject) => {
          writeStream.on('finish', () => {
            console.log(`Arquivo salvo em: ${savePath}`);
            resolve();
          });
  
          writeStream.on('error', (err: any) => {
            console.error('Erro ao salvar o arquivo:', err);
            reject(err);
          });
        });
      }
  } catch (error) {
    console.error('Erro ao baixar o arquivo:', error.message);
  }
}