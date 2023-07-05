import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocentesModule } from './docentes/docentes.module';

@Module({
  imports: [DocentesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
