import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { state } from './app.states';
import { uiRouterConfig } from './config/router';
import 'rxjs/add/operator/toPromise';

import { AppService } from './application/shared/app.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { HostListComponent } from './host/host-list/host-list.component';
import { AppListComponent } from './application/app-list/app-list.component';
import { AppDetailComponent } from './application/app-detail/app-detail.component';
import { HostDetailComponent } from './host/host-detail/host-detail.component';
import { AppFormComponent } from './application/app-form/app-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HostListComponent,
    AppListComponent,
    AppDetailComponent,
    HostDetailComponent,
    AppFormComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot(
      {
        states:state,
        useHash:true,
        config:uiRouterConfig
      }
    )
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
