import {Component, OnInit} from '@angular/core';
import {MainService} from '../service/main.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-fvfg-details',
    templateUrl: './fvfg-details.component.html',
    styleUrls: ['./fvfg-details.component.css']
})
export class FvfgDetailsComponent implements OnInit {
    newsDetails: any;
    newsAttList: any;
    attHref = '';
    constructor(
        private service: MainService,
        private router: Router

    ) {
        this.attHref = 'http://192.168.16.54:8001/assist-oss/file/download/bidding/';
    }

    ngOnInit() {
        console.log(this.service.receiveFVFG);
        this.newsDetails = this.service.receiveFVFG;
        console.log(this.newsDetails.newsAttList);
    }

}
