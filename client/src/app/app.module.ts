import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { ViewTaskComponent } from './components/view-task/view-task.component';
import { TaskService } from './services/task.service';
import { TaskRouteModule } from './modules/task-route/task-route.module';
import { HttpModule } from "@angular/http";
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskResolverService } from './services/task-resolver.service';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { SearchTaskComponent } from './components/search-task/search-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewTaskComponent,
    AddTaskComponent,
    NotFoundComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    SearchTaskComponent,


  ],
  imports: [
    BrowserModule,
    TaskRouteModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [TaskService,TaskResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
