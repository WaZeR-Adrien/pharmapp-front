import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Globals} from '../globals';

@Injectable({
    providedIn: 'root'
})
export class ApiClientService {

    protected apiUrl: string = environment.apiUrl;

    protected headers = {};

    protected body = {};

    protected tokenKey = 'token';

    constructor(protected http: HttpClient, private globals: Globals) {}

    setToken() {
        this.headers[this.tokenKey] = this.globals.auth.TOKEN;
    }

    call<T>(method: string, url: string): Observable<T> {
        let observable: Observable<T>;

        if (method === 'POST' || method === 'PUT') {

            this.headers['Content-Type'] = 'application/json';

            observable = this.http[method.toLowerCase()]<T>(this.apiUrl + url, this.body, {
                headers: new HttpHeaders(this.headers)
            });

        } else {

            observable = this.http[method.toLowerCase()]<T>(this.apiUrl + url, {
                headers: new HttpHeaders(this.headers)
            });

        }

        return observable.pipe(
            tap(
                _ => console.log(method.toUpperCase() + ' ' + url + ' : success'),
                err => console.log(err.error)
            )
        );
    }
}
