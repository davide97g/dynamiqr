import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from '../../models/user.model'
import { AuthService } from '../../services/auth.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
    user: User = new User()
    constructor(public auth: AuthService, public router: Router) {
        this.auth.user$.subscribe((user) => {
            this.user = user
            if (this.user.email) this.router.navigateByUrl('home')
            else this.auth.startUi()
        })
    }

    ngOnInit(): void {}
}
