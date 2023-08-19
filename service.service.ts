import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor() { }
  student=[
    {name:'Abirami',age:'22'},
    {name:'Kaviayarasi',age:'21'},
    {name:'Arun',age:'23'},
  ]
  public getstudent(){
    return this.student;
  }
}
