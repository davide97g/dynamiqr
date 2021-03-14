import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ShirtsComponent } from './pages/shirts/shirts.component'
import { HomeComponent } from './pages/home/home.component'
import { OrderComponent } from './pages/order/order.component'
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component'
import { RedirectComponent } from './pages/redirect/redirect.component'
import { AdminComponent } from './pages/admin/admin.component'

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
    {
        path: 'shirts',
        component: ShirtsComponent,
    },
    {
        path: 'admin',
        component: AdminComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: HomeComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
