import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductService {
  private products: Product[] = [];
  private idCounter = 1;

  create(input: CreateProductInput): Product {
    const newProduct = { id: this.idCounter++, ...input };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  delete(id: number): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}
