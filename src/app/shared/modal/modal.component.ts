import { Component, OnInit } from '@angular/core';
import { DialogComponent ,DialogService } from 'ng2-bootstrap-modal';

export interface ConfirmModel{
  title:string;
  message:string;
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends DialogComponent<ConfirmModel ,boolean> implements ConfirmModel {
  title: string;
  message :string;
  constructor(dialogService: DialogService) {
    super(dialogService)
  }

  ngOnInit() {
  }

  confirm() {
    this.result = true;
    this.close();
  }


}
