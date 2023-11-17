"use strict";
import { Request, Response } from "express";

/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {
  res.send(200, {
    title: "API Examples",
  });
};
