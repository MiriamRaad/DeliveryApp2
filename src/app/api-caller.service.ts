import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {
  private _url: string = 'https://laser.a2hosted.com/backend/restaurant/api/restaurant/?format=json'

  Order: any = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('laser:laser')
    })
  };

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  getRest() {
    return this.http.get(this._url, this.httpOptions)
  }

  addItem(item: any) {
    this.Order.push(item)
  }

  postData(data: any) {
    this.http.post<any>('http://localhost:8000/orders/postdata/', { formdata: JSON.stringify(data) })
      .subscribe({
        next: (response) => {
          this.router.navigate(['OrderConfirmation'], { relativeTo: this.route })
          localStorage.clear()
        },
        error: (error) => console.log(error),
      });
  }
}
