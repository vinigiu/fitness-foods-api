require('dotenv').config();
import cron from 'node-cron';
import { MongoClient } from 'mongodb';
import importProducts from './importProducts';

const client = new MongoClient(process.env.MONGODB_URI);

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
    importProducts();
    console.log('Base de produtos atualizada');
  } catch (error) {
    console.error('Erro ao atualizar base de produtos:', error);
  }
});