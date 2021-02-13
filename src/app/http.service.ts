import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable()
export class HttpService{

    constructor(private http: HttpClient) {}

    getPhoneBooks(){
        return this.http.get('/assets/phone-book.json');
    }
}