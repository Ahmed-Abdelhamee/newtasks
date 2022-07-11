import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../modules/Iproduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http:HttpClient) { }

  getDataServer() : Observable <Iproduct[]>{
    return this.http.get<Iproduct[]>('http://localhost:3000/products')
  }
  getDataServerByCategory(CategoryID:any): Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`http://localhost:3000/products?CategoryID=${CategoryID}`)
  }
  getDataServerByID(ID:number) : Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`http://localhost:3000/products?id=${ID}`)
  }


  postUserData(data:any){
    this.http.post('http://localhost:3000/users',data).subscribe();
  }

  postNewProduct(data:any){
    this.http.post('http://localhost:3000/products',data).subscribe()
  }
  
  updateProduct(id:number,object:Iproduct){
    this.http.put(`http://localhost:3000/products/${id}`,object).subscribe()
  }
  deleteProduct(id:number){
    this.http.delete(`http://localhost:3000/products/${id}`).subscribe()

  }
}
