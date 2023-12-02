import { Controller, Get } from '@nestjs/common';
import { SealService } from './seal.service';

@Controller('seal')
export class SealController {
  constructor(private readonly sealService: SealService) {}

  @Get()
  getHiFromSeal(): string {
    return this.sealService.getHiFromSeal();
  }
}
