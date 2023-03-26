import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-add-medicines',
  templateUrl: './add-medicines.component.html',
  styleUrls: ['./add-medicines.component.css']
})
export class AddMedicinesComponent implements OnInit{

  alert : boolean = false;

  addMedicine = new FormGroup({
    id_medicine: new FormControl(''),
    name_of_medicine: new FormControl(''),
    weight: new FormControl(''),
    shape: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl(''),
  })

  constructor(private medicines:MedicinesService) { }

  ngOnInit(): void {
    
  }

  collectMedicine()
  {
    // console.warn(this.addMedicine.value);
    this.medicines.saveMedicine(this.addMedicine.value).subscribe((medicine)=>{
      console.warn("Medicine is working", medicine);
      this.alert = true;
      this.addMedicine.reset({});
    });
  }
  closeAlert(){
    this.alert = false;
  }
}
