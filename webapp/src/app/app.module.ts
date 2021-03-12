import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeComponent } from './pages/home/home.component'
import { RedirectComponent } from './pages/redirect/redirect.component'
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component'
import { OrderComponent } from './pages/order/order.component'
import { MenuComponent } from './components/menu/menu.component'
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component'
import { PopupComponent } from './components/popup/popup.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { AdminComponent } from './pages/admin/admin.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component'
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component'
import { ShirtsComponent } from './pages/shirts/shirts.component'

/** @angular/fire */
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'

const config = {
    apiKey: 'AIzaSyDL7OR5zrqJXXhZV8tRP80_YN5SRxERr1k',
    authDomain: 'dynamiqr.firebaseapp.com',
    databaseURL:
        'https://dynamiqr-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'dynamiqr',
    storageBucket: 'dynamiqr.appspot.com',
    messagingSenderId: '123071531989',
    appId: '1:123071531989:web:91f7d42983387b970c0b5c',
    measurementId: 'G-P8K36P1EP7',
}

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
        ShirtsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule,
        AngularFireAuthModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
