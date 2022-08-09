import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FoodService } from './services/food.service';
import { CommonModule } from '@angular/common';
import { SearchModule } from './components/search/search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodlistModule } from './food/foodlist/foodlist.module';
import { InformationComponent } from './infocomponent/information/information.component';
@NgModule({
  declarations: [
    AppComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    ReactiveFormsModule,
    FoodlistModule,
    
  ],
  providers: [
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
