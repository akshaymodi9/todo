import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { taskInfo } from '../../models/taskInfo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent  {

  private task:taskInfo[]
  constructor(private taskSvc:TaskService) {
    
    this.taskSvc.getTask()
    .subscribe(
      data=>{
        console.log(data)
        this.task=data
      },
      err=>{
        console.log(err)
      }
    )
   }
 


}
