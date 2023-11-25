import fs from "fs";
import * as readline from "readline";

export async function get100ProductsFromFile(filePath: string): Promise<any[]> {
  let products: any = [];
  let lineCounter = 0;

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
    });

    rl.on("line", (obj) => {
      if (lineCounter < 100) {
        lineCounter++;
        products.push(JSON.parse(obj));
      } else {
        for (let i = 0; i < products.length; i++) {
            products[i].imported_t = new Date().toISOString(),
            products[i].status = "published"
        }
        rl.close();
        rl.removeAllListeners();
      }
    });

    rl.on("close", () => {
      return resolve(products);
    });
  });
}
