import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiCallerService } from '../api-caller.service'

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  Orders: any = []
  TotalItems: number = 0
  Price: number = 0
  username: string = ''
  password: string | number = ''

  constructor(private http: ApiCallerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if ('cart' in localStorage) {
      this.http.Order = JSON.parse(localStorage.getItem('cart')!)
    }
    this.Orders = this.http.Order;
    this.TotalItems = this.http.Order.length;
    this.Price = this.gettotalprice()
  }

  gettotalprice() {
    var price = 0

    for (let i of this.Orders) {
      price += (i.price * i.quantity)
    }

    return price
  }

  newPrice() {
    this.Price = this.gettotalprice()
  }

  proceed() {
    const username = this.username
    const password = this.password
    const credentials = { 'username': username, 'password': password }
    if (credentials.username != "" && credentials.password != "") {
      localStorage.setItem('credentials', JSON.stringify(credentials))
      this.router.navigate(['OrderAddress'], { relativeTo: this.route });
    } else {
      alert("Please add your username and password!")
    }
  }
}
