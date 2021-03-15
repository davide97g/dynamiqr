import { Injectable } from '@angular/core'
import { UtilsService } from './utils.service'
import { Shirt, mocks as shirts } from '../models/shirt.model'
import { User } from '../models/user.model'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private utils: UtilsService) {}

    async decrypt(code: string): Promise<string> {
        console.info('decrypt', code)
        // * read from db
        // * increment scans
        // * extract link
        let link: string = ''
        return link
    }

    async getUserShirts(user: User): Promise<Shirt[]> {
        this.utils.spinner.next(true)
        setTimeout(() => {
            this.utils.spinner.next(false)
        }, 2000)
        return shirts
    }

    async saveQRLink(
        shirt_id: string,
        qr_code: string,
        new_link: string
    ): Promise<boolean> {
        return true
    }
}
