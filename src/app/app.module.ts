import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LOGINComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { MapComponent } from './map/map.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LOGINComponent,
    LogoComponent,
    SignUpComponent,
    LoginNavbarComponent,
    FooterComponent,
    HomeComponent,
    UsersDetailsComponent,
    MapComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
