import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  task: Task = {
    title: '',
    description: '',
    category: ''
  };
  accion:string;

  constructor(
    private taskService : TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.task = this.taskService.getTask(+id);
      this.accion = "Editar";
    } else {
      this.accion = "Nueva";
    }
  }

  saveTask() {
    this.taskService.saveTask(this.task);
  }

  goBackToMenu() {
    this.router.navigateByUrl("/home");
  }

}
