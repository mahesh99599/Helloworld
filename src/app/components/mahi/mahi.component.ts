import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mahi',
  templateUrl: './mahi.component.html',
  styleUrls: ['./mahi.component.css']
})
export class MahiComponent implements OnInit {
   name:string;
   age :number;
   email:string;
   address:Address;
   hobbies:string[];
  constructor() {
    console.log('constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnit ran...');
    this.name = 'Mahi';
    this.age = 28;
    this.email='a.mahesh9959@gmail.com';
    this.hobbies= ['Watching Cricket', 'listening to music'];
  
  }
OnClick(){
  this.name= 'Raji';
  this.hobbies.push('Watching movies') 
}
}