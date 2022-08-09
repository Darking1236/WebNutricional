import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodlistModule } from 'src/app/food/foodlist/foodlist.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FoodlistModule,
    FormsModule

  ],
  exports:[
    SearchComponent 
  ]
})
export class SearchModule { }
