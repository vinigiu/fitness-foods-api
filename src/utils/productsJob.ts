require('dotenv').config();
import { downloadFile } from './downloadFile';
import { saveToMongoDB } from './saveToDatabase';
import { saveImportInfo } from './saveImportToDb';
import { cleanTmp } from './cleanTmp';
import { ImportObject } from '../interfaces/ImportObject';

const baseURL = process.env.BASE_URL;
const tmpDir = path.join(process.cwd(), 'tmp');
const dbName = 'fitness-foods';
export default async function productsJob () {
    try {
    const importObj: ImportObject = {
      imported_t: new Date().toISOString(),
      imported_files: [],
    }

    downloadFile(baseURL, 'index.txt');

    fs.readdirSync(tmpDir).forEach((file: any) => {
      const filePath = path.join(tmpDir, file);
      saveToMongoDB(filePath, dbName, 'products');
      importObj.imported_files.push(filePath);
    });

    saveImportInfo(importObj, dbName);

    cleanTmp();

    console.log('Base de produtos atualizada');
  } catch (error) {
    console.error('Erro ao atualizar base de produtos:', error);
  }
}

productsJob();