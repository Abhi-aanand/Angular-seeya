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
  <!-- <input [(ngModel)]="name" type="text"> 
  {{name}} -->

  <!-- DIRECTIVES -->
  <!-- <h2 *ngIf="displayName; else elseBlock">
    Codevolution
  </h2>

  <ng-template #elseBlock>
    <h2>
      Name is hidden
    </h2> -->

    <!-- USING ngSwitch -->
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">you picked red color</div>
      <div *ngSwitchCase="'blue'">you picked blue color</div>
      <div *ngSwitchCase="'green'">you picked green color</div>
      <div *ngSwitchDefault>pick again</div>
    </div>


`,
  styles: []
})
export class TestComponent implements OnInit{

  // public name ="";
  // displayName=false;
  public color="yellow";

  constructor(){

  }
  ngOnInit() {
      
  }
  // logMessage(value: any){
  //   console.log(value);
    

  // }

}
