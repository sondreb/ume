import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApplicationState } from './application-state';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private appState: ApplicationState) { }
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		if (this.appState.authenticated) {
			return true;
		}

		// alert('Unauthorized Access, Redirecting to Home');
		this.router.navigate(['Home']);
		return false;
	}
}
