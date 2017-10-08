import { AuthData } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserLogin } from '../user-login/user-login';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

@IonicPage()
@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignup {

  public signupForm: FormGroup;
  public loading: Loading;

  constructor(
    public navCtrl: NavController, 
    public authProvider: AuthData,
    public formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
      this.signupForm = formBuilder.group({
        email: ['', 
          Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', 
          Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }

    signupUser(){
      if (!this.signupForm.valid){
        console.log(this.signupForm.value);
      } else {
        this.authProvider.signupUser(this.signupForm.value.email, this.signupForm.value.password)
        .then(() => {
          this.loading.dismiss().then( () => {
            this.navCtrl.push(Dashboard);
          });
        }, (error) => {
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });
        this.loading = this.loadingCtrl.create();
        this.loading.present();
      }
    }

    loginPage(){ this.navCtrl.push(UserLogin);}
    forgotPasswordPage(){ this.navCtrl.push(UserForgotpassword);}

}
