import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // {productName:"Laptop",productId:100,cost:40000,category:"Electronics"}
  categoryInput:string="Stationary";
   
  products:product[]=[{productId:101,productName:"Laptop",cost:40000,category:"Electronics"},
    {productId:102,productName:"Keyboard",cost:20000,category:"Electronics"},
    {productId:103,productName:"MobilePhone",cost:40000,category:"Electronics"},
    {productId:104,productName:"Pendrive",cost:400,category:"Electronics"},
    {productId:105,productName:"Pepsi",cost:80,category:"Beverages"},
    {productId:106,productName:"Juice",cost:40000,category:"Beverages"},
    {productId:107,productName:"Charger",cost:450,category:"Electronics"},
    {productId:108,productName:"Pen",cost:40,category:"Stationary"},
    {productId:109,productName:"Bag",cost:1200,category:"Stationary"},
    {productId:110,productName:"PowerBank",cost:4000,category:"Electronics"},
    {productId:111,productName:"7up",cost:40,category:"Beverages"},
    {productId:112,productName:"Mouse",cost:500,category:"Electronics"}
    ];

}
