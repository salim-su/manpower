import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_SERVER_URL} from '../app.config';
import {_HttpClient} from '../util/_HttpClient';

@Injectable()
export class MainService {
    receiveFVFG: any;
    receivezbgg: any;

    constructor(private http: Http, private httpClient: HttpClient, private client: _HttpClient) {
    }

    getDictionary(res) {
        return this.http.get(BASE_SERVER_URL + '/getDictionary', {params: {id: res}});
    }

    // getBillTypes() {
    //   console.log('这是service里的方法');
    // }

    // getBillTypes() {
    //     this.httpClient.post(BASE_SERVER_URL + 'item/getItemList', {}, {}).subscribe(data => {
    //         console.log(data);
    //     });
    // }
    //
    // getaa() {
    //     this.http.post(BASE_SERVER_URL + 'samplingEstablishment/getSelfSolution', {rows: 10, page: 1}, {}).subscribe(data => {
    //         console.log(data.json());
    //     });
    //
    // }
    //
    // getbb() {
    //     return this.http.post(BASE_SERVER_URL + 'samplingEstablishment/getSelfSolution', {rows: 10, page: 1}, {});
    // }
    //
    // getItems() {
    //     return this.client.post<any>(BASE_SERVER_URL + 'item/getItemList');
    // }


    queryAllDicByCategoryId(categoryId: string, name: string) {
        return this.httpClient.post<any>(BASE_SERVER_URL + 'system/dictionary/queryAllDicByCategoryId', {categoryId, name});
    }

    queryNewsLists(rows, page, queryParams) {
        let postData = Object.assign(queryParams, {
            rows, page,
        });
        return this.httpClient.post<any>(BASE_SERVER_URL + 'biddingNews/queryNewsList', postData);
    }

    /*查询招标公告*/
    getTenderingAnnouncement(pi, ps) {
        const postData = {
            rows: pi,
            page: ps,
            processStatusList: ['SUBMITTED', 'ARCHIVED'],
            loginRole: 'MANAGER'

        };
        return this.client.get(BASE_SERVER_URL + 'bidding/getTenderingAnnouncement', postData);
    }

}

