import { HomeComponent } from './home/home.component';
import { HostListComponent } from './host/host-list/host-list.component';
import { HostDetailComponent } from './host/host-detail/host-detail.component';
import { AppListComponent } from './application/app-list/app-list.component';
import { AppDetailComponent } from './application/app-detail/app-detail.component';
import { AppFormComponent } from './application/app-form/app-form.component';
import { Transition } from '@uirouter/angular';
import { AppService } from './application/shared/app.service';

export const state = [{
    name: 'home',
    url: '/',
    component: HomeComponent
  }, {
    name: 'appList',
    url: '/apps',
    component: AppListComponent
  }, {
    name: 'appList.detail',
    url: '/detail/:name',
    params: { name: null },
    component: AppDetailComponent
  }, {
    name: 'appList.create',
    url: '/create',
    params: { insFlag: true },
    component: AppFormComponent
  }, {
    name: 'appList.edit',
    url: '/edit',
    params: { id: null ,insFlag: false},
    component: AppFormComponent
  }, {
    name: 'hostList',
    url: '/hosts',
    component: HostListComponent
  }, {
    name: 'hostList.detail',
    url: '/detail',
    component: HostDetailComponent
  }
]
