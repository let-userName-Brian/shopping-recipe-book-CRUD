import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";
import { Router } from '@angular/router';
import { API_KEY_PROD } from "src/environments/environment.prod";

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthService {
    user = new Subject<User>();
    token: string = '';
    private expirationTimer: any;
    constructor(private http: HttpClient, private router: Router,) { }

    autoLogin() {
        const userData: {
          email: any;
          id: any;
          _token: any;
          _tokenExpirationDate: any;
        } = JSON.parse(localStorage.getItem('userData') as any);
        if (!userData) {
          return;
        }
        this.token = userData._token;
      }

    autoLogout(expirationDuration: number) {
        this.expirationTimer = setTimeout(() => {
            this.onLogout();
        }, expirationDuration);
    }


    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY_PROD}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
            .pipe(
                catchError(this.handleError),
                tap(resData => {
                    this.handleAuthenticate(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
                }))
    };

    signin(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY_PROD}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
            .pipe(catchError(this.handleError),
                tap(resData => {
                    this.handleAuthenticate(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
                }));
    };

    onLogout() {
        this.token = '';
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.expirationTimer) {
            clearTimeout(this.expirationTimer);
        }
        this.expirationTimer = null;
    }

    private handleAuthenticate(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(
            new Date().getTime() + expiresIn * 1000
        );
        const user = new User(
            email,
            userId,
            token,
            expirationDate
        );
        this.user.next(user);
        this.autoLogout(expiresIn * 1000)
        this.token = token;
        localStorage.setItem('userData', JSON.stringify(user));
    };

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = "An unknown error occurred!";
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        };
        switch (errorRes.error.error.message) {
            case "EMAIL_EXISTS":
                errorMessage = "This email exists already.";
                break;
            case "EMAIL_NOT_FOUND":
                errorMessage = "This email does not exist.";
                break;
            case "INVALID_PASSWORD":
                errorMessage = "This password is not correct.";
                break;
        };
        return throwError(errorMessage);
    };

}
