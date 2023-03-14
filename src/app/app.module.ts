import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from "./dashboard/dashboard.module";
import { SidenavComponent } from './includes/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { SubjectsModule } from './subjects/subjects.module';
import { DepartmentsModule } from './departments/departments.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './includes/footer/footer.component';



@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        FooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardModule,
        BrowserAnimationsModule,
        MaterialModule,
        DashboardModule,
        StudentsModule,
        TeachersModule,
        SubjectsModule,
        DepartmentsModule,HttpClientModule, FontAwesomeModule
    ]
})
export class AppModule { }
