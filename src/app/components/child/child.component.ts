import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cart } from 'src/app/modules/cart.interface';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() categoryArr:cart[]=[];

  @Output() public categorySellected=new EventEmitter();

   arr:cart={} // object variable

  ngOnInit(): void {
  }

  
  buy(index:number){
     this.arr=(this.categoryArr[index])

    this.categorySellected.emit(this.arr)
  }
  decrease(index:number){
    // this.ProductList[index].quantity=this.ProductList[index].quantity-1;
  }



}
