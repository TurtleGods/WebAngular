import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './main/home/home.component';
import { MyCalendarComponent } from './main/my-calendar/my-calendar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'favorites', component: HomeComponent },
      { path: 'schedule', component: MyCalendarComponent },
      { path: 'records', component: MyCalendarComponent  },
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route for /main
    ],
  },
  { path: '**', redirectTo: '/login' },
];
