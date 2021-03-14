import { Injectable } from '@angular/core'

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
}
