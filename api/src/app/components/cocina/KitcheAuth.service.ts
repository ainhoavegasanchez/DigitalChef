import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../services/user/user.service';


@Injectable({ providedIn: 'root' })
export class KitchenAuthService implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.userService.get();
        if (currentUser) {
            if (currentUser.email == "cocina@digitalchef.com") {
                return true;
            }
            this.router.navigate(['/inicio']);
            return false;
        }


        this.router.navigate(['/portada']);
        return false;
    }
}