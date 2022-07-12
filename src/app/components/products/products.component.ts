import { Component, OnInit } from '@angular/core';
import { discountOffers } from 'src/app/modules/discountOffers.enum';
import { Iproduct } from 'src/app/modules/Iproduct.interface';
import { store } from 'src/app/modules/store.class';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

// binding data 
  discount=discountOffers;
  store=new store();
  ClientName:string=" sir ahmmed";
  checkQuantity:any={'background':'yellow'};
  personalID:any="29902182601392";
  creaditCard:any="";
  date=new Date()
  color:string="";

// arrays
  ProductList:Iproduct[]=[
    {id:1,name:"iphone",quantity:41, price:14.500, img:"assets/iphone.png",CategoryID:10702,},
    {id:2,name:"redio",quantity:0, price:500, img:"assets/radio.png",CategoryID:444,},
    {id:3,name:"TV",quantity:70, price:10500, img:"assets/tv.png",CategoryID:222,},
    {id:4,name:"smartphone",quantity:1, price:10500, img:"assets/smartphone.png",CategoryID:741,},
  ]
  productsCategory:Iproduct[]=[]
  
// boolean variables for control the show
  showTable:boolean=false
  checkBuy:boolean=false;

  // for show product using id
  id:any=""; // binding variable
  productCheck:boolean=false;
  product:Iproduct={}

  constructor() { }
 
  ngOnInit(): void {
  }

  buy(){
    this.checkBuy=true
  }
  decrease(index:number){
    this.ProductList[index].quantity! --
  }

  showProduct(){
    this.productCheck=true;
      this.product = this.ProductList.find(item=> this.id==item.id)!
  }
  
  selectProduct(event:any){
    this.showTable=true;
    this.productsCategory=[]
    this.productsCategory= this.ProductList.filter( arr => arr.CategoryID==event.target.value)
  }
}
