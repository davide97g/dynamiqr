import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class UtilsService {
    spinner: Subject<boolean> = new Subject<boolean>()
    constructor() {}
}
