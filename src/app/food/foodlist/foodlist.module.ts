import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodlistComponent } from './foodlist.component';



@NgModule({
  declarations: [
    FoodlistComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    FoodlistComponent
  ]
})
export class FoodlistModule { }
