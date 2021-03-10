import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { OrderComponent } from './pages/order/order.component'
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component'
import { RedirectComponent } from './pages/redirect/redirect.component'

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'redirect',
        component: RedirectComponent,
    },
    {
        path: 'personal-area',
        component: PersonalAreaComponent,
    },
    {
        path: 'order',
        component: OrderComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: HomeComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
