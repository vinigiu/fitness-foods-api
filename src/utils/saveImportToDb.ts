import { MongoClient } from 'mongodb';
import { ImportObject } from '../interfaces/ImportObject';

export async function saveImportInfo(
    importObj: ImportObject,
    dbName: string,
) {
    const client = new MongoClient(process.env.MONGODB_URI);
    let inserted;
    try {
        await client.connect();
        const database = client.db(dbName);
        inserted = await database.collection('imports').insertOne(importObj);
    } catch (error) {
        console.error('Erro ao salvar imports no MongoDB')
    } finally {
        client.close();
        return inserted;
    }
  }