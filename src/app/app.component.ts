import { Component,OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FoodService } from './services/food.service';
import { Foods } from './models/foods';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(){  }
 
  ngOnInit():void {
  }



 
}
