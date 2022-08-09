import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Foods} from '../models/foods'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { foodResponse } from '../models/foodResponse';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
   /*foodAdd:Foods={
    Food_Code:0,
    Display_Name:'',
    Portion_Default:0,
    Portion_Amount:0,
    Portion_Display_Name:'',
    Factor:0,
    Increment:0,
    Multiplier:0,
    Grains:0,
    Whole_Grains:0,
    Vegetables:0,
    Orange_Vegetables:0,
    Drkgreen_Vegetables:0,
    Starchy_vegetables:0,
    Other_Vegetables:0,
    Fruits:0,
    Milk:0,
    Meats:0,
    Soy:0,
    Drybeans_Peas:0,
    Oils:0,
    Solid_Fats:0,
    Added_Sugars:0,
    Alcohol:0,
    Calories:0,
    Saturated_Fats:0,
  }
  */
    

  constructor(private http:HttpClient) {}

  getFoods():Observable<Foods[]> {
    let header= new HttpHeaders()
      .set('Type-content','aplication/json')

    return this.http.get<foodResponse>(environment.url_api,{headers:header})
      .pipe(
           map(dat=>dat.data)
        );
  }

  getOneFood(food:string):Observable<Foods[]>{
   
    return this.http.get<foodResponse>(`${environment.url_api}/${food}`)
      .pipe(
          map(dat=>dat.data)
        );
  }
}
