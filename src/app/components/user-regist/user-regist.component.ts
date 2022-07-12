import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { testUserName } from 'src/app/custumValidate/validate';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-user-regist',
  templateUrl: './user-regist.component.html',
  styleUrls: ['./user-regist.component.scss']
})
export class UserRegistComponent implements OnInit {

  constructor(private fromBuilder:FormBuilder ,private service:ProductApiService) { }

  regist=this.fromBuilder.group({
    name:["",[Validators.required,Validators.minLength(5),testUserName(/admin/)]],
    email:["",[Validators.required,Validators.email]],
    pass:["",[Validators.required,Validators.minLength(6)]],
    phone: this.fromBuilder.array([""],[Validators.required,Validators.pattern(/^\d{11}$/)]),
    address: this.fromBuilder.group({
      city: ["",[Validators.required]],
      street: ["",[Validators.required]],
      postal: ["",[Validators.required]]
    })
  })

  get name(){
    return this.regist.get("name")
  }
  get email(){
    return this.regist.get("email")
  }
  get pass(){
    return this.regist.get("pass")
  }
  get phone(){
    return this.regist.get("phone") as FormArray
  }
  get address(){
    return this.regist.get("address") 
  }
  get city(){
    return this.address?.get("city") 
  }
  get street(){
    return this.address?.get("street") 
  }
  get postal(){
    return this.address?.get("postal") 
  }

  ngOnInit(): void {
  }

  addNumber(){
    this.phone.push(this.fromBuilder.control(''))
  }
  removeNumber(){
    this.phone.removeAt(this.phone.length-1)
  }
  submit(){
    console.log(this.regist.value)
    this.service.postUserData(this.regist.value)
  }
}
