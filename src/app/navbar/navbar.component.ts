import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    jiePid: string;
    state: any;
    items = [];
    sel = 0;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.items = [
            {
                id: '1',
                name: '网站首页'
            },
            {
                id: '2',
                name: '招标公告'
            },
            {
                id: '3',
                name: '中标公告'
            },
            {
                id: '4',
                name: '政策法规'
            },
            {
                id: '5',
                name: '联系方式'
            }
        ];
    }

    ngOnInit() {



        //
        // this.jiePid = this.activatedRoute.snapshot.params['id'];
        // this.jiePid = this.activatedRoute.snapshot.queryParams['selfid'];

        // this.jiePid = this.activatedRoute.snapshot.queryParams['id'];
    }

    clickitem(i, item) {
        this.sel = i;
        console.log(i);
        console.log(item);
        /*跳转法律法规新闻*/
        if (item.name === '政策法规') {
            this.router.navigate(['/fvfg'], {
                queryParams: {
                    selfid: 1
                }
            });
        }
        /*跳转联系我们*/
        if (item.name === '联系方式') {
            this.router.navigate(['/contact'], {
                queryParams: {
                    selfid: 2
                }
            });
        }
        /*跳转联系我们*/
        if (item.name === '网站首页') {
            this.router.navigate([''], {
                // queryParams: {
                //     selfid: 2
                // }
            });
        }
        /*跳转招标公告*/
        if (item.name === '招标公告') {
            this.router.navigate(['zbgg'], {
                // queryParams: {
                //     selfid: 2
                // }
            });
        }

        /*跳转招标公告*/
        if (item.name === '中标公告') {
            this.router.navigate(['zhongbgg'], {
                // queryParams: {
                //     selfid: 2
                // }
            });
        }
    }
}
