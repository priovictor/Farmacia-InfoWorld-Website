import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})

export class ListOrdersComponent implements OnInit{
  constructor(private orders:OrdersService){ }
  collection: any = [];
  
  ngOnInit(): void {
    this.orders.getListOrders().subscribe((ordersList)=>{
      console.warn(ordersList);
      this.collection = ordersList;
    })
  }

  deleteOrder(order: any)
  {
    this.orders.deleteOrder(order).subscribe((data)=>{
        console.warn("Data", data);
    })
  }
}
