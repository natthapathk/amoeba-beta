import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuList = [
    {
      name:"Resource Management",
      subMenu:[
        { name:"Application" ,state:"appList" },
        { name:"Host" ,state:"hostList" }
      ]
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}
