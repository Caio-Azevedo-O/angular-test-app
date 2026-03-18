import {Injectable, signal} from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = (signal(false));

    constructor(private router: Router) {
        if(typeof window !== 'undefined' && window.localStorage){
            const loggedIn = localStorage.getItem("isLoggedIn") === "true";
            this.isLoggedIn.set(loggedIn);
        }
    }

    successfulLogin(){
        this.isLoggedIn.set(true);
        localStorage.setItem("isLoggedIn", "true");
    }
    logoff(){
        this.isLoggedIn.set(false);
        localStorage.setItem("isLoggedIn", "false");
        this.router.navigate(["/"])
    }
}