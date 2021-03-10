import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedirectComponent,
    PersonalAreaComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
