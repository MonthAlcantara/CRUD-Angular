import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  product: Product = {
    name: '',
    price: null,
  };

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com Sucesso!');
      this.router.navigate(['/products']);
    });
  }

  deleteProduct(id: string): void {
    this.productService.delete(id);
    this.productService.showMessage('Produto excluído com Sucesso!');
    this.router.navigate(['/products']);
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
