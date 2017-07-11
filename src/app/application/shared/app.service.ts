import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private _URL :string = "https://randomuser.me/api/";
  constructor(public http : Http) { }
  getData() {
    return this.http.get(this._URL+"?results=10")
      .map(res => { return res.json() })
      .toPromise();
  }

  getDataById(Id:string){
    return this.http.get(this._URL+"?name="+Id)
      .map(res => { return res.json() })
      .toPromise();
  }

  createData(data:object){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Save")
      },2000)
    })
  }

  updateData(data:object,id:number){
    console.log(data)
    console.log(id)
  }

  deleteData(Id:string){
    console.log('Deleted.. '+Id)
  }
}
