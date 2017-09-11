import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users : any;

  constructor(public navCtrl: NavController,  public userProvider : UserProvider) {
    this.users = [];
    this.recuperarUsers();
  }

  recuperarUsers(){
    this.userProvider.getUsers().subscribe(data => {
      this.users = data ;
      console.log('users :', this.users);
    });
}
}
