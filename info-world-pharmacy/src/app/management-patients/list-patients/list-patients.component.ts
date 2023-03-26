import { Component, OnInit} from '@angular/core';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})

export class ListPatientsComponent implements OnInit{
  constructor(private patients:PatientsService){ }
  collection: any = [];

  ngOnInit(): void{
    this.patients.getListPatiences().subscribe((patientsList)=>{
      console.warn(patientsList);
      this.collection = patientsList;
    })
  }
}
