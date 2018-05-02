import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { OrganisationsComponent } from './organisations/index';
import { ReportsComponent } from './reports/index';
import { ProfilesComponent } from './profiles/index';

import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'organisations', component: OrganisationsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'profiles', component: ProfilesComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
