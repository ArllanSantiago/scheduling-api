import { Injectable } from '@nestjs/common';
import { Scheduling } from './scheduling.model';

@Injectable()
export class SchedulingService {
  private schedules: Scheduling[] = [];

  getAllSchedules(): Scheduling[] {
    return this.schedules;
  }

  createSchedule(schedule: Scheduling): Scheduling {
    const newSchedule: Scheduling = {
      ...schedule,
      id: this.schedules.length + 1,
    };
    this.schedules.push(newSchedule);
    return newSchedule;
  }
}
