import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IBaseApiErrorResponse, IBaseApiError } from '../models/base-api.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoginError: boolean = false;
  error: IBaseApiErrorResponse;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(userName, password) {
    this.userService.userAuthentication(userName, password).subscribe(
      (data: any) => {
        let user = data.data
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        this.router.navigate(['home']);
      },
      (err: Error) => {
        if (err instanceof HttpErrorResponse) {
          this.isLoginError = true;
          this.error = err.error
        } else {
          // throw err;
        }

      });
  }

}
