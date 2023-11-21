import { Document, Schema, model } from "mongoose";

interface IProduct extends Document {
  code: Number;
  status: String;
  imported_t: Date;
  url: String;
  creator: String;
  created_t: Number;
  last_modified_t: Number;
  product_name: String;
  quantity: String;
  brands: String;
  categories: String;
  labels: String;
  cities: String;
  purchase_places: String;
  stores: String;
  ingredients_text: String;
  traces: String;
  serving_size: String;
  serving_quantity: Number;
  nutriscore_score: Number;
  nutriscore_grade: String;
  main_category: String;
  image_url: String;
}

const productSchema = new Schema({
    code: { type: Number, required: true },
    status: { type: String, required: true },
    imported_t: { type: Date, required: true },
    url: { type: String, required: true },
    creator: { type: String, required: true },
    created_t: { type: Number, required: true },
    last_modified_t: { type: Number, required: true },
    product_name: { type: String, required: true },
    quantity: { type: String, required: true },
    brands: { type: String, required: true },
    categories: { type: String, required: true },
    labels: { type: String, required: true },
    cities: { type: String, required: true },
    purchase_places: { type: String, required: true },
    stores: { type: String, required: true },
    ingredients_text: { type: String, required: true },
    traces: { type: String, required: true },
    serving_size: { type: String, required: true },
    serving_quantity: { type: Number, required: true },
    nutriscore_score: { type: Number, required: true },
    nutriscore_grade: { type: String, required: true },
    main_category: { type: String, required: true },
    image_url: { type: String, required: true }
  });

const ProductModel = model<IProduct>("Product", productSchema);

export { ProductModel, IProduct };
