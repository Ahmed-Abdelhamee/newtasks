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

   setProductIndexForChange:number=0;

  ngOnInit(): void {
  }

  
  makeChange(i:number){
    this.buyed=true
    this.setProductIndexForChange=i;
  }
  buy(index:number){
    if(index==this.setProductIndexForChange && this.buyed){
      this.arr=this.categoryArrLab4[index]
      this.arr.count=this.formCount.get("count")?.value!
      this.categorySellectedLab4.emit(this.arr);
      this.categoryArrLab4[index].quantity! = this.categoryArrLab4[index].quantity!-this.arr.count!
      this.buyed=false
    }
  }
}
