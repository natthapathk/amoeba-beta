import { Component, OnInit ,Input } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})

export class AppListComponent implements OnInit {
  @Input() appData;
  constructor(){}

  ngOnInit() {
  }

}
