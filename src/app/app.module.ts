import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

import { from } from 'rxjs';
import { GuestScreenComponent } from './components/guest-screen/guest-screen.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';

import { PlayerService } from './services/player.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GuestScreenComponent,
    AdminScreenComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule

  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
