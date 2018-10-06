import {Component, OnInit} from '@angular/core';
import {MainService} from '../service/main.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-fvfg',
    templateUrl: './fvfg.component.html',
    styleUrls: ['./fvfg.component.css']
})
export class FvfgComponent implements OnInit {
    itemsCat = [];
    selectedCategory: any;
    sel = 0;
    newsData = [];
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
        this.queryAllDicByCategoryId();

        this.activatedRoute.queryParams.subscribe((queryParams: Params) => this.jiePid = queryParams['selfid']);

        console.log(this.jiePid);
    }

    /*获取新闻类型*/
    queryAllDicByCategoryId() {
        this.service.queryAllDicByCategoryId('1014', '').subscribe(res => {
            this.itemsCat = res.data;
            console.log(this.itemsCat);

            if (this.itemsCat.length > 0) {
                this.selectedCategory = this.itemsCat[0];
                console.log(this.selectedCategory);
            }
            this.loadNewsList();
        });
    }

    /*获取类型下新闻列表*/
    loadNewsList() {
        this.queryParams['typeId'] = this.selectedCategory['id'];
        this.service.queryNewsLists(10, this.p, this.queryParams).subscribe(res => {
            console.log(res);
            this.newsData = res.data.rows;
            console.log(this.newsData);
            this.total = res.data.total;
        });
    }

    clickfvfg(i, item) {
        this.sel = i;
        console.log(item);
        this.selectedCategory = item;
        this.loadNewsList();
        // console.log(i);
        // console.log(item);
        // /*跳转法律法规新闻*/
        // if (item.name === '政策法规') {
        //     this.router.navigate(['/fvfg'], {
        //         queryParams: {
        //             selfid: 2
        //         }
        //     });
        // }

    }

    pageChanged(e) {
        this.p = e;
        this.loadNewsList();
        console.log(e);
    }

    clickitem(item) {
        console.log(item);
        this.service.receiveFVFG = item;
        /*跳转新闻详情*/
            this.router.navigate(['fvfgDetails'], {
                // queryParams: {
                //     selfid: 2
                // }
            });
    }
}
