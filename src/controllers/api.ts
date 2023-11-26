"use strict";
import { Request, Response } from "express";
import apiServices from "../services/apiSercives";

const apiController = {
  getApi: async (req: Request, res: Response) => {

    const info = await apiServices.getApiInfo();

    res.status(200).send(info);
  }
};

export default apiController;
