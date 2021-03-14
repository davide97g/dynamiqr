import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user.model'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
    title: string = 'Dynamiqr'
    user: User = new User()
    constructor(public router: Router, public auth: AuthService) {
        this.auth.user$.subscribe((user) => (this.user = user))
    }

    ngOnInit(): void {}
}
