import { NestFactory } from '@nestjs/core';
import { MainModule } from './module/main.module';
import { ConfigService } from './module/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(ConfigService.getConfig().PORT);
}
bootstrap();
