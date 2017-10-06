
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  autenticacao : any = null;
  email: string;
  password: string;

  constructor(public autenticacaoProvider : AutenticacaoProvider, private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe((auth) =>{
      this.autenticacao = auth !== null;
    });
  }

  signup() {
    this.autenticacaoProvider.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.autenticacaoProvider.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.autenticacaoProvider.logout();
  }

}
