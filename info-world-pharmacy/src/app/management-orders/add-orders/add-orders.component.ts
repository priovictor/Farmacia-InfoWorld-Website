import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit{

  alert : boolean = false;

  addOrder = new FormGroup({
    id_order: new FormControl(''),
    name_of_patience: new FormControl(''),
    address: new FormControl(''),
    name_of_medicine: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl('')
  })

  constructor(private orders:OrdersService) { }

  ngOnInit(): void {
    
  }

  collectOrder()
  {
    // console.warn(this.addPatient.value);
    this.orders.saveOrder(this.addOrder.value).subscribe((order)=>{
      console.warn("Order is working", order);
      this.alert = true;
      this.addOrder.reset({});
    });
  }
  closeAlert(){
    this.alert = false;
  }
}
