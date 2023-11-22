import { Request, Response } from 'express';
import productService from '../services/productsService';

const productController = {
  getAllProducts: async (req: Request, res: Response) => {
    const { page } = req.query;
    const products = await productService.getAllProducts(Number(page));
    res.status(200).json(products);
  },

  getProduct: async (req: Request, res: Response) => {
    const { code } = req.params;
    const product = await productService.getProduct(code);
    res.status(200).json(product);
  },

  createProduct: async (req: Request, res: Response) => {
    const newProduct = req.body;
    const createdProduct = await productService.createProduct(newProduct);
    res.status(200).json(createdProduct);
  },

  updateProduct: async (req: Request, res: Response) => {
    const { code } = req.params;
    const updateData = req.body;
    const updatedProduct = await productService.updateProduct(code, updateData);
    res.status(200).json(updatedProduct);
  },

  deleteProduct: async (req: Request, res: Response) => {
    const { code } = req.params;
    const deletedProduct = await productService.deleteProduct(code);
    res.status(200).json(deletedProduct);
  },
};

export default productController;