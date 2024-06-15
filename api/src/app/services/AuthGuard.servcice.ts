import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user/user.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.userService.get();
        if (currentUser) {
            if(currentUser.email == "cocina@digitalchef.com"){
                this.router.navigate(['/cocina']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/login']); 
        return false;
    }
}