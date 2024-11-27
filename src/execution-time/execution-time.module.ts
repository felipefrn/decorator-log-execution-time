import { Module } from '@nestjs/common';
import { ExecutionTimeController } from './execution-time.controller';
import { ExecutionTimeService } from './execution-time.service';

@Module({
  controllers: [ExecutionTimeController],
  providers: [ExecutionTimeService],
})
export class ExecutionTimeModule {}
