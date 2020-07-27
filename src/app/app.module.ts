import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';


//personal components
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { SclassesComponent } from './components/sclasses/sclasses.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SchoolModalComponent } from './components/school-modal/school-modal.component';

import { AppRoutingModule } from './routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SchoolsComponent,
    SclassesComponent,
    ToolbarComponent,
    MainComponent,
    SidebarComponent,
    SchoolModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
