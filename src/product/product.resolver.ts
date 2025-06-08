import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { GraphQLBoolean } from 'graphql';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product])
  getAllProducts() {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  addProduct(@Args('input') input: CreateProductInput) {
    return this.productService.create(input);
  }

  @Mutation(() => GraphQLBoolean)
  deleteProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.delete(id);
  }
}
