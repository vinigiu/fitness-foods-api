require('dotenv').config();
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

const database = client.db('fitness-foods');
const collection = database.collection('products');

const productService = {
  getAllProducts: async (page: number): Promise<any[]> => {
    await client.connect();
    
    let products;
    
    try {
      await client.connect();

      const skip = (page - 1) * 30;
      const limit = 30;
  
      products = await collection.find({}).skip(skip).limit(limit).toArray();
  
      console.log(products);
    } finally {
      await client.close();

      return products;
    }
  },

  getProduct: async (code: any): Promise<any> => {
    await client.connect();
    
    let product;
    
    try {
      await client.connect();

      console.log(code)
  
      product = await collection.findOne({ code });
  
      if (!product) {
        return { erro: 'It was not possible to find product with this code'};
      }
    } finally {
      await client.close();

      return product;
    }
  },

  createProduct: async (data: any): Promise<any> => {
    let result;

    try {
      await client.connect();
  
      result = await collection.insertOne(data);
  
      console.log(`Product inserted with ID: ${result.insertedId}`);
    } finally {
      await client.close();
      
      return result;
    }
  },

  updateProduct: async (code: any, data: any): Promise<any> => {
    let result;

    let codeToNumber = Number(code);

    try {
      await client.connect();
  
      result = await collection.updateOne({ code: codeToNumber }, { $set: data });

      if (result.modifiedCount < 1) {
        console.log('Product not found or not updated');
      } 

      console.log(`Product updated successfully`);
    } finally {
      await client.close();
      
      return result;
    }
  },

  deleteProduct: async (code: any): Promise<any> => {
    let deleted;

    let codeToNumber = Number(code);

    try {
      await client.connect();

      console.log(code)
  
      deleted = await collection.updateOne({ code: codeToNumber }, { $set: { status: "trash" }});
      
      if (!deleted) {
        console.log(`Unnable to delete product with this code`)
        return { erro: 'Unnable to delete product'};
      }
      console.log(`Product deleted: ${deleted}`);
    } finally {
      await client.close();
      
      return deleted;
    }
  },
};

export default productService;