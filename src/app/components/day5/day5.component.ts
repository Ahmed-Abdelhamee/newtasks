import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/modules/Icategory.interface';
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

  categories:Icategory[]=[
    {id:444,name:"radio"},
    {id:10702,name:"mobile"},
    {id:222,name:"tv"},
  ]


  ngOnInit(): void {
    this.serviceApi.getDataServer().subscribe(data =>{
      this.products=data;
    })
  }
  
  setCategory(event:any){
  // get products by frist letter in category name
    let CategoryId=0;
    for(let item of this.categories){
      if(item.name==event.target.value){
        CategoryId=item.id;
        this.categorys=this.products.filter(item => item.CategoryID==CategoryId)
        this.checkCateg=true
      }
    }

  // get products by in category name
    // for(let item of this.categories){
    //   if(item.name==event.target.value){
    //     CategoryId=item.id;
    //     this.categorys=this.products.filter(item => item.CategoryID==CategoryId)
    //     this.checkCateg=true
    //   }
    // }

  // get data by category id numbers
    // this.serviceApi.getDataServerByCategory(event.target.value).subscribe(data=>{
    //   this.categorys=data
    // })

   }

   setID(event:any){
    this.serviceApi.getDataServerByID(event.target.value).subscribe(data=>{
      this.product=data
    })
    this.checkID=true
   }
}
