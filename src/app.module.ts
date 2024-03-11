import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { TasksModule } from './tasks/tasks.module';
import { ContactMiddleware } from './contact/contact.middleware';

@Module({
  imports: [InfoModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContactMiddleware).forRoutes('*');
  }
}
