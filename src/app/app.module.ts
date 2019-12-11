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
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

import { from } from 'rxjs';
import { GuestScreenComponent } from './components/guest-screen/guest-screen.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';

import { PlayerService } from './services/playerService/player.service';
import { GameService } from './services/gameService/game.service';
import { UpdatePlayerComponent } from './components/admin-screen/updates/update-player/update-player.component';
import { CreatePlayerComponent } from './components/admin-screen/updates/create-player/create-player.component';
import { JoinGameComponent } from './components/guest-screen/join-game/join-game.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GuestScreenComponent,
    AdminScreenComponent,
    UpdatePlayerComponent,
    CreatePlayerComponent,
    JoinGameComponent,
    RegisterComponent,
    
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
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  exports: [ UpdatePlayerComponent,CreatePlayerComponent,JoinGameComponent ]  
  ,
  entryComponents: [UpdatePlayerComponent,CreatePlayerComponent,JoinGameComponent]
  ,
  providers: [PlayerService,GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
