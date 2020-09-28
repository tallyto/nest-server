import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Estudar Serverless', completed: false },
    { id: 2, description: 'Estudar Docker', completed: false },
    { id: 3, description: 'Estudar DynamoDB', completed: false },
    { id: 4, description: 'Estudar Testes Automatizados', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find(value => value.id == id);
    return task;
  }

  create(task: Task) {
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = lastId + 1;
    this.tasks.push(task);
    return task;
  }

  update(task: Task) {
    const taskArray = this.getById(task.id);
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }
    return taskArray;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id)
    console.log(index)
    this.tasks.splice(index, 1)
  }
}
