import { Controller, Post, Body, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() taskData: any) {
    return this.tasksService.create(taskData);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }
}
