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

  @Input() categoryArr:cart[]=[] ;

  @Output() public categorySellected=new EventEmitter();

   arr:cart={} // object variable

   formCount=this.formBuilder.group({
    count:[]
   })

   setProductIndexForChange:number=0;
   
   quantityInput:number[]=[]

   changed:boolean=false;

  ngOnInit(): void {
    for(let item in this.categoryArr){ this.quantityInput.push(0) }
  }

  
  makeChange(i:number,event:any){
    this.changed=true;
    this.setProductIndexForChange=i;
    this.quantityInput[i]=event.target.value
  }
  buy(index:number){
    if(index==this.setProductIndexForChange && this.changed && this.categoryArr[this.setProductIndexForChange].quantity! >= this.quantityInput[this.setProductIndexForChange]){
      this.arr.quantity=this.categoryArr[index].quantity!+this.arr.count!
      this.arr=this.categoryArr[index]
      this.arr.count=this.formCount.get("count")?.value!
      this.arr.quantity=this.categoryArr[index].quantity!-this.arr.count!
      this.categorySellected.emit(this.arr);
      this.changed=false;
    }
  }
}
