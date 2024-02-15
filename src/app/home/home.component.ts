import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  popularProducts : undefined | product[];
  trendyProducts : undefined | product[]
  constructor(public product:ProductService){

  }

  ngOnInit():void{
    this.product.popularProducts().subscribe((data)=>{
      this.popularProducts = data;
    })
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }
}
