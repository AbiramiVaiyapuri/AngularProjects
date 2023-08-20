import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  
  constructor() { }
  email='abi@gmail.com';
  password = '1705';
  public GetText(){
    return 'string from service';
  }
  Anime=[
    {name:'Iron Man',hero:'Tony sparks'},
    {name:'Spider Man',hero:'Petter'},
    {name:'Hulk',hero:'Brouce'},
    {name:'Black widow',hero:'Natasa'},
  ]

   public anime(){
    return this.Anime;
   }
}
