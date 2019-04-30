import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		public afAuth: AngularFireAuth,
		public userService: UserService,
		private router: Router
	){}

  	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{
	  	return new Promise((resolve, reject) => {
		    this.userService.getCurrentUser()
		    .then(user => {
		      this.router.navigate(['/generator']);
		      return resolve(false);
		    }, err => {
		      return resolve(true);
		    })
	  	})	
	}
}
