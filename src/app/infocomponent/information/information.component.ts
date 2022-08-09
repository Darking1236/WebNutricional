import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Observable } from 'rxjs';
import { Foods } from 'src/app/models/foods';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  foods$!: Observable<Foods[]>

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.getAllfood();
  }

  getAllfood(){
    this.foods$=this.foodService.getFoods();
  }
}
