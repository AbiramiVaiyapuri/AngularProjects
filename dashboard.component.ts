import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
users=[
  {FirstName:"Abi",LastName:"vaiyapuri",Gender:"Female",Email:"abi@gmail.com"},
  {FirstName:"Aadhi",LastName:"Ravi",Gender:"Male",Email:"aadhi@gmail.com"},
  {FirstName:"Kavi",LastName:"vasu",Gender:"Female",Email:"kavi@gmail.com"},
  {FirstName:"Arun",LastName:"Suresh",Gender:"Female",Email:"arun@gmail.com"},
];
}
