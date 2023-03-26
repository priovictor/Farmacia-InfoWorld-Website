import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  
  url="http://localhost:3000/patients";  
  constructor(private http:HttpClient) { }
  
  getListPatiences(){
    return this.http.get(this.url);
  }

  savePatient(data: any)
  {
    return this.http.post(this.url, data);
  }

  deletePatient(id_patient : any){
    return this.http.delete(`${this.url}/${id_patient}`);
  }
  
}
