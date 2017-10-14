import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']

})
export class EditTaskComponent implements OnInit {

  private form:FormGroup
  constructor(private fb:FormBuilder,private taskSvc:TaskService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let taskId = this.route.snapshot.params.id
    let task=this.route.snapshot.data['task']

     this.form=this.fb.group({
       id:[taskId],
       taskname:[task.taskname],
       description:[task.description],
       status:[task.status,Validators.required]

     })
  }

  public update(){
    if(this.form.valid){
    let taskId=this.form.value.id
    let s={
      status:this.form.value.status
    }
    this.taskSvc.updateTask(taskId,s)
    
    .subscribe(
      data=>{ this.router.navigate(['/view'])
      },
      err=>{alert('Error')}
    )
    
 
  }
  else{
    alert('Invalid')
  }
  
  }

}
