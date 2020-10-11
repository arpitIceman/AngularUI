import { Component, OnInit } from '@angular/core';
import { Customer } from '../../DTO/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {


  customers: Customer[] = [
 
    {customerNo: 1, name: 'Sample 1', address: '', city: 'New Delhi', state: 'New Delhi', country: 'India'},
    {customerNo: 2, name: 'Sample 2', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Sample 3', address: '', city: 'Goa', state: 'Goa', country: 'India'},
    {customerNo: 4, name: 'Sample 4', address: '', city: 'Noida', state: 'Uttar Pradesh', country: 'India'},
    {customerNo: 5, name: 'Sample 5', address: '', city: 'Delhi', state: 'Delhi', country: 'India'},
 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
