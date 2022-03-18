import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  postEmployee(data:any){
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(
      map(
        (
          res => {
            return res;
          }
        )
      )
    )
  }

  getEmployee(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(
      map(
        (
          res => {
            return res;
          }
        )
      )
    )
  }

  updateEmployee(data:any, id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id, data).pipe(
      map(
        (
          res => {
            return res;
          }
        )
      )
    )
  }

  removeEmployee(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(
      map(
        (
          res => {
            return res;
          }
        )
      )
    )
  }
}
