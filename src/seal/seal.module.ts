import { Module } from '@nestjs/common';
import { SealService } from './seal.service';
import { SealController } from './seal.controller';

@Module({
  controllers: [SealController],
  providers: [SealService],
})
export class SealModule {}
