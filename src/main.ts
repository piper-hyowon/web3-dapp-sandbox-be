import { NestFactory } from '@nestjs/core';
import { MainModule } from './module/main.module';
import { ConfigService } from './module/config/config.service';
import { Logger } from '@nestjs/common';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create(MainModule, {
    cors: true,
  });
  const port: number = ConfigService.getConfig().PORT;

  await app.listen(port);

  Logger.log(
    `Server ${ConfigService.getConfig().ENV} running on port ${port}`,
    'APP',
  );
}
bootstrap();
