import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'docker-three-tier-demo-frontend';
  customers?: Observable<Customer[]>;

  constructor(private httpClient: HttpClient) {
    this.customers = this.httpClient.get<Customer[]>('/api/v1/customers');
  }
}
