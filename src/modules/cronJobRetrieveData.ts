require('dotenv').config();
import cron from 'node-cron';
import axios from 'axios';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

async function fetchDataFromOpenFoodFacts() {
  const response = await axios.get(process.env.OPEN_FOODS_API);
  return response.data;
}

async function insertProductsIntoDatabase(products: any[]) {
  try {
    await client.connect();
    const database = client.db('fitness-foods');
    const collection = database.collection('products');

    await collection.insertMany(products);
  } finally {
    await client.close();
  }
}

cron.schedule('0 23 * * *', async () => {
  try {
    const products = await fetchDataFromOpenFoodFacts();
    await insertProductsIntoDatabase(products);
    console.log('Base de produtos atualizada');
  } catch (error) {
    console.error('Erro ao atualizar base de produtos:', error);
  }
});