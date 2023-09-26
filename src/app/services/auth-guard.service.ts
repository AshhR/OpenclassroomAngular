import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable()


export class AuthGuard {

    constructor(private authService: AuthService, 
                private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot):boolean |Observable<boolean>    
                                    | Promise<boolean>{

    if(this.authService.isAuth){
        return true;
    }
    else{
        this.router.navigate(['/auth']);
        return false;
    }

}

}

