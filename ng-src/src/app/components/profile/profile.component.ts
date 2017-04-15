import { Component, OnInit } from '@angular/core';
import { Auth } from "../auth/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(public auth: Auth) {

    this.profile = JSON.parse(localStorage.getItem('profile'));

    console.log('app_metadata: ' + this.profile.app_metadata);
    console.log('given_name: ' + this.profile.given_name);
    console.log('family_name : ' + this.profile.family_name);
    console.log('blocked: ' + this.profile.blocked);
    console.log('created_at: ' + this.profile.created_at);
    console.log('email: ' + this.profile.email);
    console.log('email_verified: ' + this.profile.email_verified);
    console.log('identities: ' + this.profile.identities);
    console.log('multifactor: ' + this.profile.multifactor);
    console.log('last_ip: ' + this.profile.last_ip);
    console.log('last_login: ' + this.profile.last_login);
    console.log('logins_count: ' + this.profile.logins_count);
    console.log('name: ' + this.profile.name);
    console.log('nickname: ' + this.profile.nickname);
    console.log('phone_number: ' + this.profile.phone_number);
    console.log('phone_verified: ' + this.profile.phone_verified);
    console.log('picture: ' + this.profile.picture);
    console.log('updated_at: ' + this.profile.updated_at);
    console.log('user_id: ' + this.profile.user_id);
    console.log('user_metadata: ' + this.profile.user_metadata);
    console.log('access_token: ' + this.profile.access_token);
    console.log('refresh_token: ' + this.profile.refresh_token);
    console.log('id_token: ' + this.profile.id_token);
  };

  ngOnInit() {
  }

}
