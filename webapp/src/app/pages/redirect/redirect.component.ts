import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'app-redirect',
    templateUrl: './redirect.component.html',
    styleUrls: ['./redirect.component.sass'],
})
export class RedirectComponent implements OnInit {
    code: string = ''
    constructor(private router: ActivatedRoute, private api: ApiService) {}

    ngOnInit(): void {
        this.code = this.router.snapshot.queryParamMap.get('code') || ''
        this.code
            ? this.decrypt(this.code)
            : console.error('Error: code not found')
    }

    async decrypt(code: string) {
        this.api
            .decrypt(code)
            .then((link) => this.redirect(link))
            .catch((err) => console.error(err))
    }

    redirect(link: string) {
        window.open(link)
    }
}
