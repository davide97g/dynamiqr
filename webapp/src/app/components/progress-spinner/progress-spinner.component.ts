import { Component, OnInit } from '@angular/core'
import { UtilsService } from '../../services/utils.service'

@Component({
    selector: 'app-progress-spinner',
    templateUrl: './progress-spinner.component.html',
    styleUrls: ['./progress-spinner.component.sass'],
})
export class ProgressSpinnerComponent implements OnInit {
    mode: string = 'determinate'
    constructor(private utils: UtilsService) {
        this.utils.spinner.subscribe((value: boolean) =>
            value ? (this.mode = 'indeterminate') : (this.mode = 'determinate')
        )
    }

    ngOnInit(): void {}
}
