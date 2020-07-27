import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { StudentsComponent } from './components/students/students.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { SclassesComponent } from './components/sclasses/sclasses.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

import { AppRoutingModule } from './routes/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    StudentsComponent,
    SchoolsComponent,
    SclassesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
