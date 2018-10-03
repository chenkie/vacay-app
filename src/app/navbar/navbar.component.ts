import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(
    public authService: AuthService,
    public router: Router,
    public oktaAuth: OktaAuthService
  ) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    console.log(this.isAuthenticated);
  }

  // logout(): void {
  //   this.authService.logout().subscribe(
  //     result => {
  //       this.router.navigate(['login']);
  //     },
  //     err => {
  //       alert(err.error.message);
  //     }
  //   );
  // }

  // public logout(): void {
  //   this.authService.logout();
  //   this.router.navigate['login'];
  // }

  public login() {
    this.oktaAuth.loginRedirect();
  }

  public logout() {
    this.oktaAuth.logout('/');
  }

  public getGoogleLogin(): string {
    const idp = '0oagavzocz9ReHRvY0h7';
    const clientId = '0oagaubr4hLl1Ei5g0h7';
    const redirectUri =
      'https://dev-769029.oktapreview.com/oauth2/v1/authorize/callback';
    return `https://dev-769029.oktapreview.com/oauth2/v1/authorize?idp=${idp}&client_id=${clientId}&response_type=id_token&response_mode=fragment&scope=openid&redirect_uri=${redirectUri}&state=WM6D&nonce=YsG76jo`;
  }
}
