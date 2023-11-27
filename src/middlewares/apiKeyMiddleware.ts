import { Request, Response, NextFunction } from "express";
import { MongoClient, WithId } from "mongodb";

interface ApiKey extends WithId<Document> {
  key: string;
}

const apiKeyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const headerApiKey = req.headers.authorization || "";
  const client = new MongoClient(process.env.MONGODB_URI);
  const database = client.db('fitness-foods');
  const collection = database.collection('keys');
  
  try {
  
    if (!headerApiKey) {
      res.status(401).send("Unauthorized");
      return;
    }
  
    const apiKeys = await collection.find().toArray();
  
  
    const validApiKey = apiKeys.find(
      (apiKeyObj: ApiKey) => apiKeyObj.key === headerApiKey
    );
  
    if (!validApiKey) {
      res.status(401).send("Unauthorized");
      return;
    }
  
    next();
  } catch (error) {
    console.log('Erro na validação da ApiKey - ', error)
  } finally {
    client.close();
  }
};

export default apiKeyMiddleware;
