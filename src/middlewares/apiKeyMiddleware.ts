import { Request, Response, NextFunction } from "express";
import Path from "path";

interface ApiKey {
  key: string;
}

const apiKeyFile = Path.join(__dirname, '..', '..', 'src', 'data', 'apikeys.json');

const apiKeys: ApiKey[] = require(apiKeyFile);

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers.authorization || "";

  if (!apiKey) {
    res.status(401).send("Unauthorized");
    return;
  }

  const validApiKey = apiKeys.find(
    (apiKeyObj: ApiKey) => apiKeyObj.key === apiKey
  );

  if (!validApiKey) {
    res.status(401).send("Unauthorized");
    return;
  }

  next();
};

export default apiKeyMiddleware;
