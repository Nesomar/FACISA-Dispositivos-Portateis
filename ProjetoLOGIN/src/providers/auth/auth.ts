import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthData {
  
  constructor(private angularFireAuth : AngularFireAuth) {
  }

  loginUser(email: string, password: string): any {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): any {
    return this.angularFireAuth.auth
  .createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string): any {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): any {
    this.angularFireAuth.auth.signOut();
  }

}