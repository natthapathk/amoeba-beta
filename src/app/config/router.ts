import { UIRouter } from '@uirouter/angular';
import { Injector ,Injectable } from '@angular/core';

export function uiRouterConfig(uiRouter :UIRouter ,injector:Injector){
    uiRouter.urlService.rules.otherwise({state:'home'});
    uiRouter.urlService.rules.initial({state:'home'});
}
