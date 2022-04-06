import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import path from 'path';
require('dotenv').config({ path: '.env' })
async function bootstrap() {
  const PORT = process.env.PORT || 8000
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Food subscription API')
    .setDescription('Food subscription api with Nest Js')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(cookieParser());
  if (process.env.NODE_ENV === "production") {
    app.use(path.join(__dirname, "client/build"));
  }
  console.log(__dirname);
  console.log(path.join(__dirname, "client/build"));
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true
  })
  await app.listen(PORT);
}
bootstrap();