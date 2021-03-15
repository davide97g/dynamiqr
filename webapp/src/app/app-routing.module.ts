import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ShirtsComponent } from './pages/shirts/shirts.component'
import { HomeComponent } from './pages/home/home.component'
import { OrderComponent } from './pages/order/order.component'
import { RedirectComponent } from './pages/redirect/redirect.component'
import { AdminComponent } from './pages/admin/admin.component'
import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'redirect',
        component: RedirectComponent,
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
    {
        path: 'login',
        component: LoginComponent,
    },
    { path: 'home', pathMatch: 'full', redirectTo: '' },
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: '**', component: HomeComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
