import { Injectable } from '@angular/core';
import { cart } from '../modules/cart.interface';
import { Iproduct } from '../modules/Iproduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }

  product:Iproduct={}

  ProductList:Iproduct[]=[
    {id:1,name:"iphone",quantity:41, price:14500, img:"assets/iphone.png",CategoryID:10702,},
    {id:2,name:"redio",quantity:0, price:500, img:"assets/radio.png",CategoryID:444,},
    {id:3,name:"TV",quantity:70, price:10500, img:"assets/tv.png",CategoryID:222,},
    {id:4,name:"smartphone",quantity:1, price:10500, img:"assets/smartphone.png",CategoryID:741,},
  ]

  // array for lab 4
  ProductListLab4:Iproduct[]=[
    {id:1,name:"iphone",quantity:41, price:14500, img:"assets/iphone.png",CategoryID:10702,},
    {id:2,name:"redio",quantity:10, price:500, img:"assets/radio.png",CategoryID:444,},
    {id:3,name:"TV",quantity:70, price:10500, img:"assets/tv.png",CategoryID:222,},
    {id:4,name:"smartphone",quantity:1, price:10500, img:"assets/smartphone.png",CategoryID:741,},
  ]

  productsCategory:Iproduct[]=[]


  total:number[]=[]


  getProductByID(prodID:any):Iproduct{
    return this.product =this.ProductList.find(item => item.id==prodID)!
  }

  getProductsByCatID(event:any): Iproduct [] {
    if(event.target.value==0){
      return this.ProductListLab4
    }else{
      return this.ProductList.filter( item => item.CategoryID==event.target.value)
    }
  }
  // data from parent to child
  selectProductLab4(event:any):Iproduct[]{
    if(event.target.value==0){
      return this.ProductListLab4
    }else{
      return this.ProductListLab4.filter(item => item.CategoryID==event.target.value)
    }
  }
  // for return the array that updated or pushed
  getpaidchildData(object:cart,arr:cart[]):any{
    let paid_Data_From_ChildLab4:cart[]=arr;
    let exist=false;
    // for update the buy array
    for(let i in paid_Data_From_ChildLab4){
      if(paid_Data_From_ChildLab4[i].id==object.id){
        paid_Data_From_ChildLab4[i].count=object.count;
        exist=true;
        return paid_Data_From_ChildLab4;
      }
    }// for push paid data array
    if(exist){}else{
      paid_Data_From_ChildLab4.push(object)
      return paid_Data_From_ChildLab4
    }
  }
}
