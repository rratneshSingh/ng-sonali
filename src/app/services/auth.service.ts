import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router){}

    login(value:any) {
        localStorage.setItem('user', JSON.stringify(value));
        this.router.navigateByUrl('');
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/auth/login');
    }
}