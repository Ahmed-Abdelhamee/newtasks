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
    {id:2,name:"redio",quantity:0, price:500, img:"assets/radio.png",CategoryID:444,},
    {id:3,name:"TV",quantity:70, price:10500, img:"assets/tv.png",CategoryID:222,},
    {id:4,name:"smartphone",quantity:1, price:10500, img:"assets/smartphone.png",CategoryID:741,},
  ]

  productsCategory:Iproduct[]=[]
  
  productsCategoryLab4:Iproduct[]=[]

  total:number[]=[]

  getProductsByCatID(event:any): Iproduct [] {
    this.productsCategory=[]
    if(event.target.value==0){
      this.productsCategory=this.ProductListLab4
    }else{
      for(let item of this.ProductList){
        if(event.target.value==item.CategoryID){
          this.productsCategory.push(item)
        }
      } 
    }
    return this.productsCategory
  }

  getProductByID(prodID:any):Iproduct{
    for(let i of this.ProductList){
      if(i.id==prodID){
        this.product.CategoryID=i.CategoryID;
        this.product.img=i.img;
        this.product.name=i.name;
        this.product.price=i.price;
        this.product.quantity=i.quantity;
      }
    }
    return this.product
  }

  getProductDetails(array:Iproduct[]):Iproduct[]{
    return array=this.ProductList
  }

  // data from parent to child
selectProductLab4(event:any):Iproduct[]{
  this.productsCategoryLab4=[]
  if(event.target.value==0){
    return this.productsCategoryLab4=this.ProductList
  }else{
    for(let item of this.ProductList){
      if(event.target.value==item.CategoryID){
        this.productsCategoryLab4.push(item);
      }
    }
    return this.productsCategoryLab4
  }
}
// for return the array that updated or pushed 
getpaidchildData(object:cart,arr:cart[]):any{
  let paid_Data_From_ChildLab4:cart[]=arr
  let exist=false;
  for(let i in paid_Data_From_ChildLab4){
    if(paid_Data_From_ChildLab4[i].id==object.id){
      paid_Data_From_ChildLab4[i].count=object.count;
      exist=true;
      return paid_Data_From_ChildLab4;
    }
  }
  if(exist){}else{
    paid_Data_From_ChildLab4.push(object)
    return paid_Data_From_ChildLab4
  }
}

}
