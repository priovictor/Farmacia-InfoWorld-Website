import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  url="http://localhost:3000/medicines";
  constructor(private http:HttpClient) { }

  getListMedicines(){
    return this.http.get(this.url);
  }

  saveMedicine(data: any)
  {
    return this.http.post(this.url, data);
  }

  deleteMedicine(id_medicine : any){
    return this.http.delete(`${this.url}/${id_medicine}`);
  }
}
