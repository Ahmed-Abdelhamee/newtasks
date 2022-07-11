import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/modules/Iproduct.interface';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-prouductdetails-link',
  templateUrl: './prouductdetails-link.component.html',
  styleUrls: ['./prouductdetails-link.component.scss']
})
export class ProuductdetailsLinkComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:ProductsServiceService) { }

  productId:any=this.route.snapshot.paramMap.get("id");;

  product:Iproduct={};

  productsarrayLength:number=this.service.ProductListLab4.length

  ngOnInit(): void {
    this.product=this.service.getProductByID(this.productId);
  }
  getProductByID(value:number){
    (value ==1) ? this.productId++ : this.productId--
    (this.productId ==0) ? this.productId=1 : this.productId ;
    (this.productId > this.productsarrayLength) ? this.productId= this.productsarrayLength : this.productId ;
    this.product=this.service.getProductByID(this.productId)
  }
}
