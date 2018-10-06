import {Component, OnInit} from '@angular/core';
import {MainService} from '../service/main.service';

@Component({
    selector: 'app-zbgg-details',
    templateUrl: './zbgg-details.component.html',
    styleUrls: ['./zbgg-details.component.css']
})
export class ZbggDetailsComponent implements OnInit {
    zbggDetails: any;
    resultDay: any;
    constructor(
        private mainService: MainService
    ) {

    }

    ngOnInit() {
        this.zbggDetails = this.mainService.receivezbgg;
        console.log(this.zbggDetails);


        const annWorkEndDate = this.zbggDetails.annWorkEndDate;
        const annWorkStartDate = this.zbggDetails.annWorkStartDate;
        console.log(annWorkEndDate);
        console.log(annWorkStartDate);
        const annWorkEnd = new Date(annWorkEndDate);
        annWorkEnd.setHours(0);
        annWorkEnd.setMinutes(0);
        annWorkEnd.setSeconds(0);
        const annWorkStart = new Date(annWorkStartDate);
        annWorkStart.setHours(0);
        annWorkStart.setMinutes(0);
        annWorkStart.setSeconds(0);
        console.log(annWorkEnd.getTime());
        console.log(annWorkStart.getTime());
        console.log(annWorkEnd.getTime() - annWorkStart.getTime());
        // this.resultDay = (annWorkEnd.getTime() - annWorkStart.getTime()) / 1000 / 60 / 60 / 24;
        if ((annWorkEnd.getTime() - annWorkStart.getTime()) < 1000 * 60 * 60 * 24) {
            this.resultDay = 0;
        } else {
            this.resultDay = (annWorkStart.getTime() - annWorkEnd.getTime()) / 1000 / 60 / 60 / 24;
        }
    }



}
