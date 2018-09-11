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

import { DestinationService } from './destination/destination.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RoleGuardService } from './auth/role-guard.service';
import { TokenInterceptorService as TokenInterceptor } from './auth/token-interceptor.service';
import { UserService } from './user/user.service';

import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    DestinationNewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // angular-jwt isn't needed when storing
    // the JWT in a cookie
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter,
    //     whitelistedDomains: ['localhost:3000']
    //   }
    // }),
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrf-token',
      headerName: 'csrf-token'
    })
  ],
  providers: [
    DestinationService,
    AuthGuardService,
    RoleGuardService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
