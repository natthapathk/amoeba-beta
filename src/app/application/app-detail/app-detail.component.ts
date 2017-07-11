import { Component, OnInit ,Input } from '@angular/core';
import { UIRouter ,Transition } from '@uirouter/angular';
import { AppService } from '../shared/app.service';
@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {
  // @Input() appData;
  appData:object;
  constructor(public appService : AppService ,public transi : Transition) {
    this.appService.getDataById(this.transi.params().name).then( res => {
      this.appData = res.results[0]
    })
  }
  ngOnInit() {}
}
