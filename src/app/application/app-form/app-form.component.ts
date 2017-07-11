import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { Transition ,UIRouter ,StateService} from '@uirouter/angular';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  appData:object = {};
  insFlag:boolean;
  iden;
  constructor(public appService: AppService ,public trans:Transition ,public state: StateService) {
    this.insFlag = trans.params().insFlag;
    this.iden = trans.params().id;
    if(this.insFlag == false){
      appService.getDataById(this.iden).then(data =>{
        this.appData = {
          name: data.results[0].name.first,
          description: data.results[0].name.last
        };
      })
    }
  }

  ngOnInit() {}
  createData() {
    this.appService.createData(this.appData).then((data)=>{
      console.log(data);
    }).then(()=>{
      this.state.go('appList',null,{reload:true})
    })
  }
  updateData() {
    this.appService.updateData(this.appData ,this.iden)
    this.state.go('appList',null,{reload: true});
  }
}
