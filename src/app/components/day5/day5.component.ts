import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/modules/Iproduct.interface';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.scss']
})
export class Day5Component implements OnInit {

  constructor(private serviceApi:ProductApiService) { }

  products:Iproduct[]=[]
  categorys:Iproduct[]=[]
  product:Iproduct[]=[]
  checkCateg:boolean=false
  checkID:boolean=false

  ngOnInit(): void {
    this.serviceApi.getDataServer().subscribe(data =>{
      this.products=data;
    })
  }
  
   setCategory(event:any){
    this.serviceApi.getDataServerByCategory(event.target.value).subscribe(data=>{
      this.categorys=data
    })
    this.checkCateg=true
   }

   setID(event:any){
    this.serviceApi.getDataServerByID(event.target.value).subscribe(data=>{
      this.product=data
    })
    this.checkID=true
   }
}
