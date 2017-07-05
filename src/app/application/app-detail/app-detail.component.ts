import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {
  @Input() appData;
  constructor() { }

  ngOnInit() {
  }

}
