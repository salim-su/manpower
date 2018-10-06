import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {MainService} from '../service/main.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    zbggData: any;
    pId: any;
    pageSize = 10;
    pageIndex = 1;
    items = [];

    constructor(
        private router: Router,
        private service: MainService
    ) {

    }

    ngOnInit() {
        this.items = [{
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }];
        this.getTenderingAnnouncement();

    }

    goZbDetails(item) {
        console.log(item);
        this.service.receivezbgg = item;
        this.router.navigate(['zbggDetails'], {
            // queryParams: {
            //     selfid: 2
            // }
        });
    }

    getTenderingAnnouncement() {
        this.service.getTenderingAnnouncement(this.pageSize, this.pageIndex).subscribe(res => {

            console.log(res);
            this.zbggData = res['data'].rows;
            console.log(this.zbggData);
        });
    }

    gozbgg() {
        this.router.navigate(['zbgg'], {
            // queryParams: {
            //     selfid: 2
            // }
        });
    }

}
