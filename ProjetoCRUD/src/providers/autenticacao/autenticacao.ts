import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AutenticacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticacaoProvider {

  authState : any = null;
  
  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe((auth) =>{
      this.authState = auth;
    })
  }

   // Returns true if user is logged in
   authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
   currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
   currentUserObservable(): any {
    return this.angularFireAuth.authState
  }

  // Returns current user UID
  currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signup(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(value =>{
      console.log('Nice, Lavei');
    });
  }

  validarAcesso(email : string ,password : string) : any {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password).then(function(response){
      if(response){
        return response;
      }
    }).catch(function (err: firebase.FirebaseError) {
      var obj = {error: err.code}
      return obj;
    });
  }

}
