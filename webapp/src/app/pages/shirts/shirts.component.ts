import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { ApiService } from '../../services/api.service'
import { Shirt } from '../../models/shirt.model'
import { User } from '../../models/user.model'
import { QR } from '../../models/qr.model'

@Component({
    selector: 'app-shirts',
    templateUrl: './shirts.component.html',
    styleUrls: ['./shirts.component.sass'],
})
export class ShirtsComponent implements OnInit {
    shirts: Shirt[] = []
    user: User = new User()
    constructor(private api: ApiService, private auth: AuthService) {
        this.auth.user$.subscribe((user) => {
            this.user = user
            if (this.user.email) this.getShirts(this.user)
        })
    }

    ngOnInit(): void {}

    async getShirts(user: User) {
        let shirts = await this.api
            .getUserShirts(user)
            .then((shirts) => shirts)
            .catch((err) => console.error(err))
        if (shirts) this.shirts = shirts
    }

    edit(shirt: Shirt, qr: QR) {}

    save(shirt: Shirt, qr: QR) {}

    cancel(shirt: Shirt, qr: QR) {}

    test(link: string) {
        window.open(link)
    }
}
