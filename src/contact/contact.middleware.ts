import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ContactMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    // Logique pour gérer le formulaire de contact
    console.log('Middleware for contact form');
    next();
  }
}
