import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { AuthGuard } from './guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // we can register authentication middleware in bootstrap 
  // app.use(new AuthenticationMiddleware())  --> how ever this is problem we don't have access to DI container here 

  // app.userGloabalGuards(new AuthGuard())  --> this is one way doing that if you have multiple dependencies injected like our middleware did this won't work too well 
  // we can apply gaurds on the controller level 

  // app.useGlobalInterceptores(new LoggingInterceptor())

  await app.listen(3000);
}
bootstrap();
