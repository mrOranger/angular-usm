import { FormsModule } from '@angular/forms';
import { RouteGuardsService } from './services/route-guards/route-guards.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth/auth.service';
import { DatabaseService } from './services/database/database.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    DatabaseService,
    RouteGuardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
