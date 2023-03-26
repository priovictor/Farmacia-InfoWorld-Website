import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url="http://localhost:3000/orders";
  constructor(private http:HttpClient) { }

  getListOrders(){
    return this.http.get(this.url);
  }
  
  saveOrder(data: any)
  {
    return this.http.post(this.url, data);
  }

  deleteOrder(id_order : any){
    return this.http.delete(`${this.url}/${id_order}`);
  }
}
