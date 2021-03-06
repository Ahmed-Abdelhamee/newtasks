import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/modules/cart.interface';
import { Iproduct } from 'src/app/modules/Iproduct.interface';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-product-lab4',
  templateUrl: './product-lab4.component.html',
  styleUrls: ['./product-lab4.component.scss']
})
export class ProductLab4Component implements OnInit {

  checkQuantity:any={'background':'yellow'};

  // arrays
  productsCategory:Iproduct[]=[]
  
// boolean variables for control the show
  checkBuy:boolean=false;

  // for show product using id
  id:any=""; // change from two way binding
  productCheck:boolean=false;
  product:Iproduct={}
  buyed:boolean=false
  count:number[]=[]; // array to show the count in each product

  constructor(private service:ProductsServiceService) { }
  // for lab 4
  ProductListLab4:Iproduct[]=[]
  paid_Data_From_ChildLab4:cart[]=[]
  showTableLab4:boolean=false
  total:number[]=[];
  totalPrice:number=0;

  ngOnInit(): void {
    this.ProductListLab4=this.service.ProductListLab4;
    this.productsCategory=this.service.ProductListLab4;
  }
  // show product on enter id input
  showProduct(){
    if(this.id>0 && this.id<=4){
      this.productCheck=true;
      this.product=this.service.getProductByID(this.id)
    }
  }
  // show products on selecting categoryID
  selectProduct(event:any){
    this.productsCategory=this.service.getProductsByCatID(event);
  }

  //sellect product from service
  selectProductLab4(event:any){
    this.ProductListLab4=[];
    this.ProductListLab4= this.service.selectProductLab4(event)
  }
  // data from child to parent
  getChildDataLab4(data:cart){
    this.buyed=true;  // for show data 

    this.paid_Data_From_ChildLab4.push(data)
    this.total.push(this.paid_Data_From_ChildLab4[this.paid_Data_From_ChildLab4.length-1].count! * this.paid_Data_From_ChildLab4[this.paid_Data_From_ChildLab4.length-1].price!)
    this.count.push(data.count!)
  //calc total price of cart   
    this.totalPrice=0
    for(let i of this.total){
      this.totalPrice += i;
    }


    //   this.paid_Data_From_ChildLab4=this.service.getpaidchildData(data,this.paid_Data_From_ChildLab4);
    // for(let i in this.paid_Data_From_ChildLab4){//calc current price of product   
    //   this.total[i]=this.paid_Data_From_ChildLab4[i].count! * this.paid_Data_From_ChildLab4[i].price!
    // }//calc total price of cart   
    // this.totalPrice=0
    // for(let i of this.total){
    //   this.totalPrice += i;
    // }
  }
}
