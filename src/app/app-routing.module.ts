import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { InformationComponent } from './infocomponent/information/information.component';

const routes:Routes=[
  { path:'home', component: SearchComponent},
  { path:'information', component:InformationComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
