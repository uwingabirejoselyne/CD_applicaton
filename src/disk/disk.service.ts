import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerservice: PowerService) {}
  getData() {
    console.log('Drawing 20 watts of power from power service');
    this.powerservice.supplyPower(20);
  }
}
