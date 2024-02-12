import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, login } from '../data-types';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {
  showLogin=false;
  authError:String='';

  constructor(private seller: SellerService, private router: Router) {
  }

  ngOninit():void{
    this.seller.reloadSeller();
  }
  signUp(data: SignUp): void {
    console.log(data);
    this.seller.userSignUp(data)
    // .subscribe((result) => {
    //   console.log("result", result);
    //   if (result) {
    //     this.router.navigate(['seller-home'])
    //   }
    // })
  }
  login(data: login): void {
    this.authError = "";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
