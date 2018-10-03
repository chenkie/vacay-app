import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DestinationComponent } from './destination/destination.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from './auth/role-guard.service';
import { DestinationNewComponent } from './destination-new/destination-new.component';
import { OktaCallbackComponent } from './okta-callback/okta-callback.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
  {
    path: 'destination/:id',
    component: DestinationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new-destination',
    component: DestinationNewComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'admin' }
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  { path: '**', redirectTo: 'catalog' }
];
