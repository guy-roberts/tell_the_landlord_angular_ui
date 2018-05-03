import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonApiModule } from 'angular2-jsonapi';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService, OrganisationService } from './services/index';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { Datastore } from './services/datastore';

import { RequestInterceptor } from './interceptors/request.interceptor';
import { ProfilesComponent } from './profiles/profiles.component';
import { ReportsComponent } from './reports/reports.component';
import { OfficersComponent } from './officers/officers.component';
import { OrganisationsComponent } from './organisations/organisations.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    routing,
    JsonApiModule,
    NgxDatatableModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfilesComponent,
    ReportsComponent,
    OfficersComponent,
    OrganisationsComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    AuthGuard,
    AuthenticationService,
    UserService,
    OrganisationService,
    Datastore
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
