import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {}

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

  public logout(): void {
    this.authService.logout();
    this.router.navigate['login'];
  }
}
