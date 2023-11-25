import fs from 'fs';
import { MongoClient } from 'mongodb';
import { Product } from '../interfaces/Product';
import { get100ProductsFromFile } from './getProductsFromFile';

export async function saveToDatabase(
    filePath: string, 
    dbName: string, 
    collectionName: string
) {
    const client = new MongoClient(process.env.MONGODB_URI);
  
    try {
      await client.connect();
      const database = client.db(dbName);
      const collection = database.collection(collectionName);
  
      const itemsToInsert = await get100ProductsFromFile(filePath);

      if (itemsToInsert.length > 0) {
        for (const item of itemsToInsert) {
            const productExists = await collection.findOne({ code: item.code});
    
            if (productExists) {
                await collection.findOneAndUpdate(
                    { code: item.code },
                    { $set: item },
                    { returnDocument: 'after' }
                );
                console.log(`Produto com código ${item.code} atualizado.`);
            } else {
                await collection.insertOne(item);
    
                console.log(`Novo produto com código ${item.code} criado.`);
            }
        }
      } else {
        console.log('Não há produtos para inserir / atualizar')
      }
    } catch (error) {
      console.error('Erro ao salvar produtos no MongoDB:', error.message);
    } finally {
      await client.close();
    }
}
