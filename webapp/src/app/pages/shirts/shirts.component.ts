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
    mapEdits: any = {}
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
        if (shirts) {
            this.shirts = shirts
            this.createMapEdits(this.shirts)
        }
    }

    createMapEdits(shirts: Shirt[]) {
        shirts.forEach((shirt: Shirt) => {
            this.mapEdits[shirt.id] = {}
            shirt.qrs.forEach(
                (qr: QR) => (this.mapEdits[shirt.id][qr.code] = false)
            )
        })
    }

    edit(shirt_id: string, qr_code: string) {
        this.mapEdits[shirt_id][qr_code] = true
    }

    save(shirt_id: string, qr_code: string) {
        this.mapEdits[shirt_id][qr_code] = false
        let input = document.getElementById(
            'link-' + shirt_id + '-' + qr_code
        ) as any
        let new_link = input.value
        this.api
            .saveQRLink(shirt_id, qr_code, new_link)
            .then((res) =>
                res
                    ? this.getShirts(this.user)
                    : console.error('Error while saving the link')
            )
            .catch((err) => console.error(err))
    }

    cancel(shirt_id: string, qr_code: string, link: string) {
        this.mapEdits[shirt_id][qr_code] = false
        let input = document.getElementById(
            'link-' + shirt_id + '-' + qr_code
        ) as any
        input.value = link
    }

    test(link: string) {
        window.open(link)
    }
}
