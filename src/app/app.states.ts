import { HomeComponent } from './home/home.component';
import { HostListComponent } from './host/host-list/host-list.component';
import { HostDetailComponent } from './host/host-detail/host-detail.component';
import { AppListComponent } from './application/app-list/app-list.component';
import { AppDetailComponent } from './application/app-detail/app-detail.component';
import { Transition } from '@uirouter/angular';
import { AppService } from './application/shared/app.service';

export const state = [{
  name: 'home',
  url: '/',
  component: HomeComponent
}, {
    name: 'appList',
    url: '/apps',
    component: AppListComponent,
    resolve: [{
      token: 'appData',
      deps: [AppService],
      resolveFn:(appSvc) => {
        return appSvc.getData().then(function(res){ return res.results })
      }
    }]
  }, {
    name: 'appList.detail',
    url: '/detail/:name',
    params: { name: null },
    component: AppDetailComponent
    // resolve:[
    //   {
    //     token:'appData',
    //     deps:[Transition ,AppService],
    //     resolveFn:(transi ,appSvc) =>{
    //         console.log(transi.params().name);
    //         return appSvc.getDataById(transi.params().name).then((res) => {
    //             return res.results;
    //         })
    //     }
    //   }
    // ]
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
