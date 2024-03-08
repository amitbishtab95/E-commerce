import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  productData:undefined | product;
  productQuantity:number = 1;

  constructor(private activeRoute:ActivatedRoute,private product:ProductService){}
  
  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      console.warn(result);
      this.productData = result;
    })
  }
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }
    else if(this.productQuantity>1 && val === 'min'){
      this.productQuantity-=1;
    }
  }
}
