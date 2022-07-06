import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { cart } from 'src/app/modules/cart.interface';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  @Input() categoryArr:cart[]=[];

  @Output() public categorySellected=new EventEmitter();

   arr:cart={} // object variable

   countChange:boolean=false;

   formCount=this.formBuilder.group({
    count:[]
   })

  ngOnInit(): void {
  }

  
  makeChange(){
    this.countChange=true;
  }
  buy(index:number){
    if(this.countChange){
      this.arr=this.categoryArr[index]
      this.arr.count=this.formCount.get("count")?.value!
      this.categorySellected.emit(this.arr);
    }else{

    }
     this.countChange=false
  }
  decrease(index:number){
    // this.ProductList[index].quantity=this.ProductList[index].quantity-1;
  }



}
