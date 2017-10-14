import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from '../../components/home/home.component';
import { ViewTaskComponent } from '../../components/view-task/view-task.component';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { EditTaskComponent } from '../../components/edit-task/edit-task.component';
import { TaskResolverService } from '../../services/task-resolver.service';
import { DeleteTaskComponent } from '../../components/delete-task/delete-task.component';
import { SearchTaskComponent } from '../../components/search-task/search-task.component';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },{
    path:'view',
    component:ViewTaskComponent
  },{
    path:'add',
    component:AddTaskComponent
  },{
    path:'edit/:id',
    component:EditTaskComponent,
    resolve:{
      task:TaskResolverService
    }
  },
  {
    path:'delete/:id',
    component:DeleteTaskComponent
  },{
    path:'search',
    component:SearchTaskComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class TaskRouteModule { }
