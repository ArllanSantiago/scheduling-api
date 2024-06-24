import { Controller, Get, Post, Body } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { Scheduling } from './scheduling.model';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Get()
  getAllSchedules(): Scheduling[] {
    return this.schedulingService.getAllSchedules();
  }

  @Post()
  createSchedule(@Body() schedule: Scheduling): Scheduling {
    return this.schedulingService.createSchedule(schedule);
  }
}
