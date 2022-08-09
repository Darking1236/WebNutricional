import { Component, Input, OnInit } from '@angular/core';
import { Foods } from 'src/app/models/foods';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent{
  @Input() foods!:Foods;
 

}
