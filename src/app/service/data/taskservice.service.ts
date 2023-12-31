import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/dashboard/task-details/task-details.component';
@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor(public http:HttpClient) { }

  retrieveTasks(){
    return this.http.get<Task[]>(`http://localhost:8080/dtasks`)
  }
}
