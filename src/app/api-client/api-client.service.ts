import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiClientService {

    protected apiUrl: string = environment.apiUrl;

    protected headers = {};

    protected body = {};

    protected tokenKey = 'token';

    constructor(protected http: HttpClient) {}

    setToken() {
        this.headers[this.tokenKey] = localStorage.getItem('token');
    }

    call<T>(method: string, url: string): Observable<T> {
        let observable: Observable<T>;

        if (method === 'POST' || method === 'PUT') {

            this.headers['Content-Type'] = 'application/x-www-form-urlencoded';

            let body = new HttpParams();
            Object.keys(this.body).forEach(key => {
                body = body.set(key, this.body[key]);
            });

            observable = this.http[method.toLowerCase()]<T>(environment.apiUrl + url, body.toString(), {
                headers: new HttpHeaders(this.headers)
            });

        } else {

            observable = this.http[method.toLowerCase()]<T>(environment.apiUrl + url, {
                headers: new HttpHeaders(this.headers)
            });

        }

        return observable.pipe(
            tap(_ => console.log(method.toUpperCase() + ' ' + url + ' : success')),
            catchError(this.handleError<any>())
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
