import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { cart } from 'src/app/modules/cart.interface';

@Component({
  selector: 'app-product-details-lab4',
  templateUrl: './product-details-lab4.component.html',
  styleUrls: ['./product-details-lab4.component.scss']
})
export class ProductDetailsLab4Component implements OnInit {

  
  constructor(private formBuilder:FormBuilder) { }

  @Input() categoryArrLab4:cart[]=[];

  @Output() public categorySellectedLab4=new EventEmitter();

   arr:cart={} // object variable

   buyed:boolean=false

   formCount=this.formBuilder.group({
    count:[]
   })

   quantityInput:number[]=[]
   setProductIndexForChange:number=0;

  ngOnInit(): void {
    for(let item in this.categoryArrLab4){ this.quantityInput.push(0) }
  }

  
  makeChange(i:number,event:any){
    this.buyed=true
    this.setProductIndexForChange=i;
    this.quantityInput[i]=event.target.value
  }
  buy(index:number){
    if(index==this.setProductIndexForChange && this.buyed
       && this.categoryArrLab4[this.setProductIndexForChange].quantity! >= this.quantityInput[this.setProductIndexForChange] 
       && this.quantityInput[this.setProductIndexForChange]>0){


        this.arr=this.categoryArrLab4[index]
        this.arr.count=this.formCount.get("count")?.value!
        this.arr.quantity = this.categoryArrLab4[index].quantity!-this.arr.count!
        this.categorySellectedLab4.emit(this.arr);
        this.buyed=false;




        

    // important code
      // if(this.arr.id==this.categoryArrLab4[index].id){
      //   this.arr.quantity=this.categoryArrLab4[index].quantity!+this.arr.count!
      //   this.arr=this.categoryArrLab4[index]
      //   this.arr.count=this.formCount.get("count")?.value!
      //   this.arr.quantity = this.categoryArrLab4[index].quantity!-this.arr.count!
      // }else{
      //   this.arr=this.categoryArrLab4[index]
      //   this.arr.count=this.formCount.get("count")?.value!
      //   this.arr.quantity = this.categoryArrLab4[index].quantity!-this.arr.count!
      // }
      // this.categorySellectedLab4.emit(this.arr);
    }
  }
}
