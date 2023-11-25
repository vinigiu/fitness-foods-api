require("dotenv").config();
import path from "path";
import fs from "fs";
import { downloadFile } from "./downloadFile";
import { saveToDatabase } from "./saveToDatabase";
import { saveImportInfo } from "./saveImportToDb";
import { cleanTmp } from "./cleanTmp";
import { ImportObject } from "../interfaces/ImportObject";

const baseURL = process.env.BASE_URL;
const tmpDir = path.join(process.cwd(), "temp");
const dbName = "fitness-foods";
export default async function productsJob() {
  try {
    const importObj: ImportObject = {
      imported_t: new Date().toISOString(),
      imported_files: [],
    };

    await downloadFile(baseURL, "index.txt");

    const indexFileContent = fs.readFileSync(`${tmpDir}/index.txt`, 'utf-8');
    const lines = indexFileContent.split('\n').map((line) => line.trim());
    
    for (const fileName of lines) {
      await downloadFile(baseURL, fileName);
    }

    const productFilesArray = fs.readdirSync(tmpDir);
    
    for await (const productFile of productFilesArray) {
      if (productFile !== 'index.txt') {
        const filePath = path.join(tmpDir, productFile);
        console.log("filePath:", filePath)
  
        await saveToDatabase(filePath, dbName, "products");
  
        importObj.imported_files.push(filePath);
      }
    }

    const inserted = await saveImportInfo(importObj, dbName);
    console.log("inserted: ", inserted)

    cleanTmp();

    console.log("Base de produtos atualizada");
  } catch (error) {
    console.error("Erro ao atualizar base de produtos:", error);
  }
}
