import { Injectable } from '@nestjs/common';

@Injectable()
export class ExecutionTimeService {
  async testExecutionTime() {
    const randomTime = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
    console.log('Random time: ', randomTime);
    return await new Promise((resolve) => setTimeout(resolve, randomTime));
  }
}
