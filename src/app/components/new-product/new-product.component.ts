import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/modules/Iproduct.interface';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private service:ProductApiService , private formBuilder:FormBuilder,private route:Router) {
    let object={
      name:"tv",
      img:"tvurl",
      category:"7fff4404",
      price:"7899",
      quantity:"16"
    }
   }

  product=this.formBuilder.group({
    name:["", Validators.required],
    img:["", Validators.required],
    CategoryID:["select", Validators.required],
    price:[, Validators.required],
    quantity:[, Validators.required],
  })

  products:Iproduct[]=[]
  btnUpdate:boolean=false
  updateid:number=0

  ngOnInit(): void {
    this.service.getDataServer().subscribe(data =>{
      this.products=data;
    })
  }

  uploadFile(event:any){
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload= (load)=>{
      this.product.patchValue({
        img:load.target?.result
      })
    }
  }

  submit(input:any){
    if(!this.btnUpdate){
      if(input.valid){
        this.service.postNewProduct(this.product.value)
        this.route.navigate(["/day5"])
        }
    }else{
        this.service.updateProduct(this.updateid,this.product.value)
        window.location.reload()
    }
  }

  setUpdate(id:number){
    this.btnUpdate=true;
    this.updateid=id
    for(let i in this.products){
      if(id==this.products[i].id){
        this.product.patchValue({
          name:this.products[i].name,
          CategoryID:this.products[i].CategoryID,
          price:this.products[i].price,
          quantity:this.products[i].quantity,
          img:this.products[i].img,
        })
      }
    }    
  }
  
  deletee(id:number){
    this.service.deleteProduct(id);
    window.location.reload()
  }
}
