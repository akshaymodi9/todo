import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  constructor(private taskSvc:TaskService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let taskId = this.route.snapshot.params.id

    this.taskSvc.deleteTask(taskId)
    .subscribe(
      data=>{
        this.router.navigate(['/view'])},
      err=>{alert('Error')}
    )

  }

}
