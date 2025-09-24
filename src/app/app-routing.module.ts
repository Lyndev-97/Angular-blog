import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TechDetailComponent } from './pages/home/tech-detail/tech-detail.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'details',
    component: TechDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
