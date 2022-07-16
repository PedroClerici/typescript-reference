import "reflect-metadata";
import { Product } from "./product.model";
import { plainToClass } from "class-transformer"
import { validate } from "class-validator";

const products = [
  {
    "title": "Book",
    "price": 19.99
  },
  {
    "title": "Carpet",
    "price": 24.79
  },
  {
    "title": "Pencil",
    "price": "1.99"
  },
  {
    "title": "Charger",
    "price": "-3.52"
  },
  {
    "title": "",
    "price": 30.00
  }
]

const loadedProducts =  plainToClass(Product, products);

const validProducts:Product[] = [];
for (const product of loadedProducts) {
  validate(product)
    .then(errors => {
      if (errors.length) {
        console.log(
          product.title ?
            `OBJECT VALIDATION ERROR IN ${product.title.toUpperCase()}` :
            'OBJECT VALIDATION ERROR IN UNKNOWN OBJECT'
        );
        for (const error of errors) {
          console.log(error.constraints);
        }
      } else {
        validProducts.push(product);
      }
    });
}

console.log('Valid Products:', validProducts);
