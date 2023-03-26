import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-list-medicines',
  templateUrl: './list-medicines.component.html',
  styleUrls: ['./list-medicines.component.css']
})
export class ListMedicinesComponent implements OnInit{
  constructor(private medicines:MedicinesService){}
  collection: any = [];

  ngOnInit(): void {
    this.medicines.getListMedicines().subscribe((medicinesList)=>{
      console.warn(medicinesList);
      this.collection = medicinesList;
    })
  }
  
  deleteMedicine(medicine: any)
  {
    this.medicines.deleteMedicine(medicine).subscribe((data)=>{
        console.warn("Data", data);
    })
  }
}
