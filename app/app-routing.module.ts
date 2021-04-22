import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent },
  {path: "login", component: LoginComponent },
  {path: "user/:id", component: UserInfoComponent },
  
  // {path: "", component: }
  // {path: "home", component: PostComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
