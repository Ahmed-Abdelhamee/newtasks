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
    {id:2,name:"redio",quantity:0, price:500, img:"assets/radio.png",CategoryID:444,count:5},
    {id:3,name:"TV",quantity:70, price:10500, img:"assets/tv.png",CategoryID:222,count:3},
    {id:4,name:"TV",quantity:1, price:10500, img:"assets/tv.png",CategoryID:222,count:2},
  ]

  
  productsCategory:cart[]=[]; //this is array we send to child
  category:number=0; // returns category numbers or 0 for default


  paid_Data_From_Child:cart[]=[] //array data to save the data comes from child
  total:number[]=[];
  buyed:number=0; // for check paid to show the data 

  ngOnInit(): void {
    // data from parent to child
    this.productsCategory=this.ProductList
  }
  
  // data from parent to child
  select(event:any){
    this.productsCategory=[]
    this.category=event.target.value;
    // check selected category
    if(this.category==0){
      this.productsCategory=this.ProductList
    }else{
      for(let item of this.ProductList){
        if(this.category==item.CategoryID){
          this.productsCategory.push(item)
        }
      }
    }
  }
  
  // data from child to parent
  getChildData(data:cart){
    this.buyed=1;  // for show data 

    let exist=false;
    let existIndex=0;
// for loop to check the data is choosed or not
    for(let i=0;i<this.paid_Data_From_Child.length;i++){
      if(this.paid_Data_From_Child[i].id==data.id){
        exist=true;
        existIndex=i;
        break;
      }else{
        exist=false;
      }
    }
    
//  check the data is choosed or not and pass the value
    if(exist){
      this.paid_Data_From_Child[existIndex].count=data.count;
      let count = this.paid_Data_From_Child[existIndex].count !    ;
      let price= this.paid_Data_From_Child[existIndex].price !  ;
      this.total[existIndex]=count*price
    }else{
      this.paid_Data_From_Child.push(data);

      let index=this.paid_Data_From_Child.length-1;
      let count = this.paid_Data_From_Child[index].count !    ;
      let price= this.paid_Data_From_Child[index].price !  ;
      this.total[index]=count*price
    }
    


  }

}
