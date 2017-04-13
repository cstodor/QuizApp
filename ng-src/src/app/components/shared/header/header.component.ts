import { Component, OnInit } from '@angular/core';
import { Auth } from "../../../components/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: any;
  isShowProfile = false;

  constructor(public auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    var profile_text = localStorage.getItem('profile');
    if (profile_text) {
      this.profile = JSON.parse(profile_text);
    }
    this.auth.onProfileUpdated.subscribe(newProfile => {
      this.profile = newProfile;
    });
  }

  toggleProfileMenu() {
    this.isShowProfile = !this.isShowProfile;
  }

  ngOnInit() {
  }

}
