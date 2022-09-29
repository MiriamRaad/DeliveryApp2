import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiCallerService } from '../api-caller.service'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: any = []
  constructor(private http: ApiCallerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subData()
  }

  subData() {
    this.http.getRest().subscribe((e: any) => {
      let i = 0;
      for (const el of e) {
        if (i === 4) {
          break
        }
        this.restaurants.push(el);
        i++;
      }
    })
  }

  foodlist(item: any) {
    let id = this.restaurants.findIndex((resto: any) => {
      return resto.name === item.name;
    })
    this.router.navigate(['foodlist', id], { relativeTo: this.route });
  }
}
