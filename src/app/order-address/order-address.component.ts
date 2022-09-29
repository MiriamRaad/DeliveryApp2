import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../api-caller.service'

@Component({
  selector: 'app-order-address',
  templateUrl: './order-address.component.html',
  styleUrls: ['./order-address.component.css']
})
export class OrderAddressComponent implements OnInit {
  fname: string = ''
  lname: string = ''
  email: string = ''
  address: string = ''
  city: string = ''
  state: string = ''
  zipcode: number | null = null

  constructor(private http: ApiCallerService) { }

  ngOnInit(): void {
  }

  submitOrder() {
    const data = { fname: this.fname, lname: this.lname, email: this.email, address: this.address, city: this.city, state: this.state, zipcode: this.zipcode }
    this.http.postData(data)
  }

}