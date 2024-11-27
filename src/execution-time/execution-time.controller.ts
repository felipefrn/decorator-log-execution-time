import { Controller, Get } from '@nestjs/common';
import { ExecutionTimeService } from './execution-time.service';
import { LogExecutionTime } from './decorators/execution-time.decorator';

@Controller('execution-time')
export class ExecutionTimeController {
  constructor(private readonly executionTimeService: ExecutionTimeService) {}

  @Get()
  @LogExecutionTime()
  async testExecutionTime() {
    return await this.executionTimeService.testExecutionTime();
  }
}
