import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { taskInfo } from '../../models/taskInfo';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {

  private task:taskInfo
  constructor(private taskSvc:TaskService) { }

  ngOnInit() {

  }
  public search(data){
    console.log(data)
    this.taskSvc.findTaskByName(data)
    .subscribe(
      data=>{this.task=data
      console.log(this.task)
      },
      err=>{  console.log(err)}
    )
  }

}
