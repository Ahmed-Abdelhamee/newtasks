import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/modules/cart.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  // your all general data 
  ProductList:cart[]=[
    {id:1,name:"iphone",quantity:41, price:14500, img:"assets/iphone.png",CategoryID:10702,count:1},
    {id:2,name:"redio",quantity:10, price:500, img:"assets/radio.png",CategoryID:444,count:5},
    {id:3,name:"TV",quantity:70, price:10500, img:"assets/tv.png",CategoryID:222,count:3},
    {id:4,name:"smartphone",quantity:1, price:4000, img:"assets/smartphone.png",CategoryID:555,count:2},
  ]

  
  productsCategory:cart[]=[]; //this is array we send to child 

  paid_Data_From_Child:cart[]=[] //array data to save the data comes from child

  result:number[]=[];

  buyed:boolean=false; // for check paid to show the data 

  index:number=0;

  totalPrice:number=0

  ngOnInit(): void {
    // data from parent to child
    this.productsCategory=this.ProductList
  }
  
  // data from parent to child
  selectProduct(event:any){
    this.productsCategory=[];
    this.index=0;
    if(event.target.value==0){
      this.productsCategory=this.ProductList
    }else{ // forloop to check the selected category and push object selected
      for(let item of this.ProductList){
        if(event.target.value==item.CategoryID){
          this.productsCategory.push(item)
        }
      }
    }
  }
  
 // data from child to parent
  getChildData(data:cart){
    this.buyed=true;  // for show data 
    let exist=false;
    for(let i in this.paid_Data_From_Child){
      if(this.paid_Data_From_Child[i].id==data.id)
      {
        this.paid_Data_From_Child[i].count=data.count;
        exist=true;
        this.result[i]=this.paid_Data_From_Child[i].count! * this.paid_Data_From_Child[i].price!
      }
    }
    if(exist==false){
      this.paid_Data_From_Child.push(data);
      this.result.push(this.paid_Data_From_Child[this.index].count! * this.paid_Data_From_Child[this.index].price!)
      this.index++
    }
    this.totalPrice=0
    for(let i of this.result){
      this.totalPrice += i;
    }
  }
}
