import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { taskInfo } from '../models/taskInfo';
import { TaskService } from './task.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskResolverService implements Resolve<taskInfo> {

  constructor(private taskSvc:TaskService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):taskInfo|Observable<taskInfo>|Promise<taskInfo>{
   
    return this.taskSvc.getTaskById(route.params.id)
  }
}
