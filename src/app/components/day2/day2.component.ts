import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/modules/Iproduct.interface';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.scss']
})
export class Day2Component implements OnInit {

// binding data 
ClientName:string=" sir ahmmed";
checkQuantity:any={background:'yellow', color:'black'};
personalID:any="29902182601392";
creaditCard:any="";
date=new Date()
color:string="";
valueChange:any

// arrays
ProductList:Iproduct[]=[]
productsCategory:Iproduct[]=[]

// boolean variables for control the show
showTable:boolean=false
checkBuy:boolean=false;

// for show product using id
id:any=""; // binding variable
productCheck:boolean=false;
product:Iproduct={}

constructor() {
  this.ProductList=[
    {id:1,name:"iphone",quantity:41, price:14.500, img:"assets/iphone.png",CategoryID:10702,},
    {id:2,name:"redio",quantity:0, price:500, img:"assets/radio.png",CategoryID:444,},
    {id:3,name:"TV",quantity:70, price:10500, img:"assets/tv.png",CategoryID:222,},
    {id:4,name:"smartphone",quantity:1, price:10500, img:"assets/smartphone.png",CategoryID:10702,},
  ]
 }

ngOnInit(): void {
}

buy(){
  this.checkBuy=true
}
decrease(id:number){
  for(let item of this.ProductList)
  if(item.id==id){
    item.quantity! --
  }
}

showProduct(){
  if(this.id>0 && this.id<=4){
    this.product = this.ProductList.find(item=> this.id==item.id)!
    this.productCheck=true;
  }
}

selectProduct(event:any){
  this.showTable=true;
  this.productsCategory=[] // to empty the array
  if(this.valueChange==0){
    this.productsCategory=this.ProductList
  }else{
    this.productsCategory= this.ProductList.filter( arr => arr.CategoryID==this.valueChange)
    // this.productsCategory= this.ProductList.filter( arr => arr.CategoryID==event.target.value)
  }
}
}
