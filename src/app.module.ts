import { MiddlewareConsumer, Module, NestModule, Scope } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './filters/http-exeception.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { RequestService } from './request.service';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    RequestService,
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
    // if i want to use auth gaurd as globalyy then i can do in this way 
    /*
    {
      provide:APP_GUARD,
      useClass: AuthGuard,
    } 
    now we are providing global off guard here 
     */
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { // this configure function here get access to this middleware consumer 
    consumer.apply(AuthenticationMiddleware).forRoutes('*');
    // .forRoutes({path:"/path", method:RequestMethod.Get})
  }
}
