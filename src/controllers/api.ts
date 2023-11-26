"use strict";
import { Request, Response } from "express";
import apiServices from "../services/apiSercives";

const apiController = {
  getApi: (req: Request, res: Response) => {

    const info = apiServices.getApiInfo();

    res.status(200).send(info);
  }
};

export default apiController;
