import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <!-- TEMPLATE REFERENCE VARIABLE -->
  <!-- <h2>welcome {{name}}</h2>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button> -->
  
  <!-- TWO-WAY BINDING
  for using ng model we have to import formsmodule in app.module.ts -->
  <input [(ngModel)]="name" type="text"> 
  {{name}}
`,
  styles: []
})
export class TestComponent implements OnInit{

  public name ="";

  constructor(){

  }
  ngOnInit() {
      
  }
  logMessage(value: any){
    console.log(value);
    

  }

}
