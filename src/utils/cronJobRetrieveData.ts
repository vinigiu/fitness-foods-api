require('dotenv').config();
import path from 'path';
import fs from 'fs';
import cron from 'node-cron';
import { MongoClient } from 'mongodb';
import downloadFile from './downloadFile';
import saveToMongoDB from './saveToDatabase';
import saveImportInfo from './saveImportToDb';
import cleanTmp from './cleanTmp';
import ImportObject from '../interfaces/ImportObject';

const client = new MongoClient(process.env.MONGODB_URI);
const baseURL = process.env.BASE_URL;
const tmpDir = path.join(process.cwd(), 'tmp');
const dbName = 'fitness-foods';

// async function fetchDataFromOpenFoodFacts() {
//   const response = await axios.get(/* inserir*/);
//   return response.data;
// }

// async function insertProductsIntoDatabase(products: any[]) {
//   try {
//     await client.connect();
//     const database = client.db('fitness-foods');
//     const collection = database.collection('products');

//     await collection.insertMany(products);
//   } finally {
//     await client.close();
//   }
// }

cron.schedule('0 23 * * *', async () => {
  try {
    const importObj: ImportObject = {
      imported_t: new Date().toISOString(),
      imported_files: [],
    }

    downloadFile(baseURL, 'index.txt');

    fs.readdirSync(tmpDir).forEach((file) => {
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
});