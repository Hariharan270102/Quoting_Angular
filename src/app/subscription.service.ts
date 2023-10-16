import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriptions } from './modules/subscriptions';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  constructor(private http: HttpClient) {}
  subscriptionsList: Subscriptions[] = [];

  private url = 'http://localhost:5051/subscriptions';

  getSubscriptions() {
    this.subscriptionsList = [];
    this.http.get<Subscriptions[]>(this.url).subscribe((response: Subscriptions[]) => {
      for (let i of response) {
        this.subscriptionsList.push(i);
      }
    });
    timer(3000);
    return this.subscriptionsList;
  }
}
