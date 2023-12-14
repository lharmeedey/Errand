import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOGINComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { MapComponent } from './map/map.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LOGINComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent},
  { path: 'usersdetails', component: UsersDetailsComponent},
  { path: 'map', component: MapComponent},
  { path: 'chat', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
