import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn, ActivatedRoute } from '@angular/router';
import { SellerService } from './services/seller.service';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const sellerService = inject(SellerService);
  if (localStorage.getItem('seller')) {
    return true;
  }
  return sellerService.isSellerLoggedIn;
};


