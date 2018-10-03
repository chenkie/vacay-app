import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-okta-callback',
  templateUrl: './okta-callback.component.html',
  styleUrls: ['./okta-callback.component.css']
})
export class OktaCallbackComponent implements OnInit {
  constructor(public oktaAuth: OktaAuthService) {}

  async ngOnInit() {
    this.oktaAuth.handleAuthentication();
  }
}
