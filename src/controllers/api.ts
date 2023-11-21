"use strict";
import { Request, Response } from "express";

const apiController = {
  getApi: (req: Request, res: Response) => {
    res.status(200).send("Resposta temporária");
  }
};

export default apiController;
