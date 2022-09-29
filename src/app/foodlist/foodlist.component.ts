import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiCallerService } from '../api-caller.service'


@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  restaurant: any = []
  restaurant_id_str: string | null = ''
  restaurant_id_int: number = 0

  categories: any = []

  constructor(private http: ApiCallerService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.restaurant_id_str = params.get('id')

      if (this.restaurant_id_str != null) {
        this.restaurant_id_int = parseInt(this.restaurant_id_str);
      }
    });
    this.subData(this.restaurant_id_int);
  }

  subData(id: number) {
    this.http.getRest().subscribe((el: any) => {
      this.restaurant = el[id]
      this.categories = el[id].categories
    })
  }

  addToCard(food: any) {
    food['quantity'] = 1
    if ('cart' in localStorage) {
      this.http.Order = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.http.Order.find((item: any) => item.name === food.name)
      if (!exist) {
        this.http.addItem(food)
        localStorage.setItem('cart', JSON.stringify(this.http.Order))
      }
    } else {
      this.http.addItem(food)
      localStorage.setItem('cart', JSON.stringify(this.http.Order))
    }
  }

}
