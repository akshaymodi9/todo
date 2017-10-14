import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  private form: FormGroup
  constructor(private fb:FormBuilder,private taskSvc:TaskService) { 
    this.form=this.fb.group({

      taskname:['',Validators.required],
      description:['',Validators.required],
      status:['',Validators.required]
      
    })
  }

  public add()
  {
    if(this.form.valid)
    {
    var obj={
      taskname:this.form.value.taskname,
      description:this.form.value.description,
      status:this.form.value.status
    }
    
    this.taskSvc.addTask(obj)
    .subscribe(
      data=>{alert("Added")},
      err=>{alert("Error")}
    )
  }
  else
  {
    alert("Form Invalid")
  }
  }

  ngOnInit() {
  }

}
