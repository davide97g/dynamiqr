import { Injectable } from '@angular/core'
import { Shirt, mocks as shirts } from '../models/shirt.model'
import { User } from '../models/user.model'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor() {}

    async decrypt(code: string): Promise<string> {
        console.info('decrypt', code)
        // * read from db
        // * increment scans
        // * extract link
        let link: string = ''
        return link
    }

    async getUserShirts(user: User): Promise<Shirt[]> {
        return shirts
    }
}
