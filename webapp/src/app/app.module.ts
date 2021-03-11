import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component';
import { OrderComponent } from './pages/order/order.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { PopupComponent } from './components/popup/popup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ShirtsComponent } from './pages/shirts/shirts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedirectComponent,
    PersonalAreaComponent,
    OrderComponent,
    MenuComponent,
    ProgressBarComponent,
    PopupComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    NotFoundComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
    ShirtsComponent
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
