import {Pipe, PipeTransform} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MainService} from '../service/main.service';

@Pipe({
    name: 'dictionoary'
})
export class DictionoaryPipe implements PipeTransform {
    zblx: any;

    constructor(private mainService: MainService,
    ) {
        // this.contractService.queryTendererListNoPage().subscribe(res => {
        //     this.contractService.setWinCompanys(res);
        // });
        this.zblx = ['', '', '', '', ''];
    }

    // transform(value: any, args?: any): Observable<any> {
    //     if (!value) {
    //         return of('');
    //     }
    //
    //     let observable = Observable.create((observer) => {
    //         this.mainService.getDictionary(value).subscribe(async (res: any) => {
    //             observer.next(res.name);
    //             observer.complete();
    //         });
    //     });
    //     return observable;
    //
    //
    // }

    transform(value: any, args?: any): any {


        if (!value) {
            return of('');
        }
        switch (value) {
            case '5fab3fb8-4b8f-4fcf-b044-1418c10d2526':
                return '公开招标';
            case 'be9cf8c9-2401-48d7-a16f-5fc955739b50':
                return '邀请招标';
            case 'bad56d1e-ee6e-4180-b445-43612b548cf5':
                return '竞标';
            case '06027a9b-5a4c-4bcf-a167-28e3a3eff6ee':
                return '直接采购';
            case 'c4796c33-b319-4564-b1cb-d41d8aac3539':
                return '询价';
            case '322554cc-31be-4255-a1b2-4798c0962a50':
                return '比价';
            /*类型*/
            case '1daf635a-ef7c-4172-af76-6e75791fee73':
                return '散杂';
            case 'bd545c96-7f38-4af8-968b-97c6f10ce56e':
                return '集装箱';
            case '6fd164d8-4489-4371-b9ac-dd422d17261a':
                return '滚装客运';
            case 'baed8645-5064-4ad0-aa99-0178bf2a69de':
                return '液散';
            case 'bc5cbb6a-257e-43be-b79a-2db3cc316c23':
                return '物流';
            case 'c749b6bf-df32-4197-8f4e-7b44c41f771b':
                return '其他';

            default:
                break;
        }

        return '异常';
    }

}
