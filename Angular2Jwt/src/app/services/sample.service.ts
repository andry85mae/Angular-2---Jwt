import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class SampleService {

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getSampleValue(): Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.getToken() });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://localhost:52447/api/Sample/GetValue', options)
            .map((response: Response) => {

                return response.json();
            });
    }

}
