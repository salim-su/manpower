import {Component, OnInit} from '@angular/core';
import {MainService} from '../service/main.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-zbgg',
    templateUrl: './zbgg.component.html',
    styleUrls: ['./zbgg.component.css']
})
export class ZbggComponent implements OnInit {
    itemsCat = [];
    selectedCategory: any;
    sel = 0;
    zbggData = [];
    queryParams = {};
    p = 1;
    pageSize = 10;
    total = 1;
    jiePid = '';

    constructor(
        private service: MainService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.getTenderingAnnouncement();
    }

    getTenderingAnnouncement() {
        this.service.getTenderingAnnouncement(this.pageSize, this.p).subscribe(res => {

            console.log(res);
            this.zbggData = res['data'].rows;
            this.total = res['data'].total;
            console.log(this.zbggData);
            console.log(this.total);
        });
    }

    pageChanged(e) {
        this.p = e;
        this.getTenderingAnnouncement();
        console.log(e);
    }

    clickzbgg(item) {
        console.log(item);

        this.service.receivezbgg = item;
        /*跳转新闻详情*/
        this.router.navigate(['zbggDetails'], {
            // queryParams: {
            //     selfid: 2
            // }
        });
    }
}
