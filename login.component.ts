import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  constructor(private router:Router,private service:ServiceService){
    
  }
  login(){
    if(this.email==this.email && this.password==this.password)
    {
      this.router.navigate(['dashboard'])
    }
  }

}
