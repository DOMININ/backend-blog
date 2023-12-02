import { Injectable } from '@nestjs/common';

@Injectable()
export class SealService {
  getHiFromSeal(): string {
    return "Seal said 'HI!'";
  }
}
