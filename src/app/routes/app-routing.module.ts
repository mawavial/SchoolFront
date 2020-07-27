import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from '../components/heroes/heroes.component';
import { HeroDetailComponent }  from '../components/hero-detail/hero-detail.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SchoolsComponent } from '../components/schools/schools.component';
import { SclassesComponent } from '../components/sclasses/sclasses.component';
import { StudentsComponent } from '../components/students/students.component';
import { MainComponent } from '../components/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/schools', pathMatch: 'full' },
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'sclasses', component: SclassesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }