import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from './index';
import { User } from '../models/index';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {
  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    //const options = new RequestOptions({ headers: headers });

    return this.http.get('/api/organisations', {} )
      .subscribe(
        response => {
           console.log('Success for getUsers()');
        },
        err => {
          console.log('Error occured');
        }
      );
  }

}
