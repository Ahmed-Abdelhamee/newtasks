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
  @Input() ifSelect:number=0;

  @Output() public categorySellected=new EventEmitter();

   arr:cart={} // object variable

   formCount=this.formBuilder.group({
    count:[]
   })

   setProductIndexForChange:number=0;

   changed:boolean=false;

   

  ngOnInit(): void {
  }

  
  makeChange(i:number){
    this.changed=true;
    this.setProductIndexForChange=i;
  }
  buy(index:number){
    if(index==this.setProductIndexForChange && this.changed){
      this.arr=this.categoryArr[index]
      this.arr.count=this.formCount.get("count")?.value!
      this.arr.quantity=this.categoryArr[index].quantity!-this.arr.count!
      this.categorySellected.emit(this.arr);
      this.changed=false;
    }
  }
  
}
