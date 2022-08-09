import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Foods } from 'src/app/models/foods';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  foods$!: Observable<Foods[]>
  foodSearch:string
  constructor(private foodService:FoodService ) { }

  ngOnInit(): void {
  }

  onSearch(term:string):void{
    this.foods$= this.foodService.getOneFood(term);
   }
}
