import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientXsrfModule
} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { ROUTES } from './app.routes';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginFormSimpleComponent } from './login-form-simple/login-form-simple.component';
import { FormMessageComponent } from './form-message/form-message.component';
import { DestinationComponent } from './destination/destination.component';
import { DestinationNewComponent } from './destination-new/destination-new.component';
import { OktaCallbackComponent } from './okta-callback/okta-callback.component';

import { DestinationService } from './destination/destination.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RoleGuardService } from './auth/role-guard.service';
import { TokenInterceptorService as TokenInterceptor } from './auth/token-interceptor.service';
import { UserService } from './user/user.service';

import { JwtModule } from '@auth0/angular-jwt';

import { OktaAuthModule } from '@okta/okta-angular';

export function tokenGetter() {
  return localStorage.getItem('token');
}

const authConfig = {
  issuer: 'https://dev-769029.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oagaubr4hLl1Ei5g0h7',
  scope: 'openid profile email'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LoginFormComponent,
    SignupFormComponent,
    InputErrorComponent,
    SidebarComponent,
    DestinationCardComponent,
    CatalogComponent,
    LoginFormSimpleComponent,
    FormMessageComponent,
    DestinationComponent,
    DestinationNewComponent,
    OktaCallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [
          'localhost:3000',
          'https://vacay-api.herokuapp.com/'
        ]
      }
    }),
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrf-token',
      headerName: 'csrf-token'
    }),
    OktaAuthModule.initAuth(authConfig)
  ],
  providers: [
    DestinationService,
    AuthGuardService,
    RoleGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
