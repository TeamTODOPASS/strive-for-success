import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        // If is logged in -> profile
        // if (/*localStorage.getItem('currentUser')*/) {
        //     return true;
        // }

        return false;
    }
}
