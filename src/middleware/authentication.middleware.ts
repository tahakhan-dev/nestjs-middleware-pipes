import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { RequestService } from '../request.service';

@Injectable() //makeing all injectable class so later on we can use this class as an nestjs DI container 
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly requestService: RequestService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // Authenticate the request
    const userId = '123';
    this.requestService.setUserId(userId);

    next();
  }
}
