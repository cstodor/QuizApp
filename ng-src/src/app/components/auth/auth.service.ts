import { Injectable, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import { environment } from "../../../environments/environment";
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

// Auth0 Credentials
const AUTH0_CLIENT_ID = environment.AUTH0_CLIENT_ID;
const AOTH0_DOMAIN = environment.AUTH0_DOMAIN;

@Injectable()
export class Auth {

  // Configure Auth0
  lock = new Auth0Lock(AUTH0_CLIENT_ID, AOTH0_DOMAIN);

  // Store profile object in auth class
  userProfile: Object;
  onProfileUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public router: Router
  ) {
    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {

      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });

    });

    // HashLocationStrategy
    this
      .router
      .events
      .filter(event => event instanceof NavigationStart)
      .filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
      .subscribe(() => { res => 
        console.log(res);
        
        this.lock.resumeAuth(window.location.hash, (error, authResult) => {
          if (error) return console.log(error);
          localStorage.setItem('id_token', authResult.idToken);
          this.router.navigate(['/']);
        });
      })

  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired('id_token');
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
    this.router.navigate(['/']);
  }

}
