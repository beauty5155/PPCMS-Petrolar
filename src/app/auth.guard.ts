// import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConst } from './model/model.appconst';

// @Injectable({
//   providedIn: 'root'
// })
export const authGuard: CanActivateFn = (route, state) => {
  return false;
// };
// export const authGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  => {


//   if (this.appconst.getItem('customerid'))
//   return true;
// else
//   this.router.navigate([''], { queryParams: { returnUrl: state.url } });
//   return false;
// }
//   // appconst = new AppConst();

//   constructor(private router: Router) { }

//   canActivate(
    
//     if (this.appconst.getItem('userid'))
//       return true;
//     else
//       this.router.navigate([''], { queryParams: { returnUrl: state.url } });
//       return false;
//   }
}