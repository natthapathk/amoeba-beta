import { Component, OnInit ,Input } from '@angular/core';
import { AppService } from '../shared/app.service';
import { DialogService } from 'ng2-bootstrap-modal';
import { ModalComponent } from '../../shared/modal/modal.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})

export class AppListComponent implements OnInit {
  // @Input() appData;
  appData = []
  constructor(private appService: AppService ,private dialogService: DialogService){
    this.appService.getData().then(data => { this.appData = data.results })
  }

  ngOnInit() {}
  deleteData(id:string){
    // console.log(id)
    this.dialogService.addDialog(ModalComponent ,{
      title: "Warning...",
      message: "Do you want to Delete ?"
    }).subscribe((isConfirm) => {
      if(isConfirm){
        this.appService.deleteData(id)
      }else{
        alert("Cancel")
      }
    })
  }
}
