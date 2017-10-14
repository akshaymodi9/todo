import { Injectable } from '@angular/core';
import { taskInfo } from '../models/taskInfo';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TaskService {

  readonly API_URL: string = "http://localhost:3500/api/"
  
  constructor(private http:Http) { }

  public getTask():Observable<taskInfo[]>{
    return this.http.get(this.API_URL)
    .map(res => res.json())
    .catch(err => Observable.throw(err))
  }

  public addTask(data):Observable<any>{

    return this.http.post(this.API_URL,data)
    .map(res=>res.json())
    .catch(err=>Observable.throw(err))
  }

  public getTaskById(id:string):Observable<taskInfo>{
    var url=`${this.API_URL}/${id}`;
  return this.http.get(url)
    .map(res=> res.json())
    .catch(err=> Observable.throw(err))
  }

  public updateTask(id:string,data):Observable<taskInfo>{
    var url=`${this.API_URL}/${id}`;
    return this.http.put(url,data)
    .map(res=>res.json())
    .catch(err=>Observable.throw(err))


  }

  public deleteTask(id:string):Observable<any>{
    var url=`${this.API_URL}/${id}`;
    return this.http.delete(url)
    .map(res=>res.json())
    .catch(err=>Observable.throw(err))
  }

  public findTaskByName(name:string):Observable<any>{
    var path="task"
    var url=`${this.API_URL}/${path}/${name}`
    return this.http.get(url)
    .map(res=>res.json())
    .catch(err=>Observable.throw(err))

  }
}
