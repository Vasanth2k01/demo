import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  constructor(private r:Router){

  }
  ngOnInit(){
    console.log('created')
  }
  ngOnDestroy(){
    console.log('destroyed')
  }
  toggle(){
    console.log('toggle')
    this.r.navigate(['/login'])
  }
  
}
