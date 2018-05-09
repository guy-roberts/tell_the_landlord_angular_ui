import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
      this.model.username = 'guy@home.com';
      this.model.password = 'domrob66';
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result.auth_token) {
          this.loading = false;
          this.router.navigate(['/reports']);
        } else {
          this.loading = false;
        }
      },
      msg => {
        this.loading = false;
        this.error = 'Username or password is incorrect ' + msg;
      });
  }
}
