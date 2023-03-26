import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.css']
})
export class AddPatientsComponent implements OnInit {

  alert : boolean = false;

  addPatient = new FormGroup({
    id_patient: new FormControl(''),
    name_of_patience: new FormControl(''),
    cnp: new FormControl(''),
    phone: new FormControl(''),
    address_home: new FormControl(''),
    address_work: new FormControl('')
  })

  constructor(private patients:PatientsService) {}
  
  ngOnInit(): void {

  }

  collectPatient()
  {
    // console.warn(this.addPatient.value);
    this.patients.savePatient(this.addPatient.value).subscribe((patient)=>{
      console.warn("Patient is working", patient);
      this.alert = true;
      this.addPatient.reset({});
    });
  }
  closeAlert(){
    this.alert = false;
  }
}
