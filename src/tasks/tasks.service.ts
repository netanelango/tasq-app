import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  create(taskData: any): string {
    this.tasks.push(taskData);
    return 'Tâche créée avec succès.';
  }

  getTasks(): any[] {
    return this.tasks;
  }
}
