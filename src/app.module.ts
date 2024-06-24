import { Module } from '@nestjs/common';
import { SchedulingModule } from './scheduling/scheduling.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite"
      ,database: "database.sqlite"
      ,entities: ["dist/**/*.entity{.ts,.js"]
      ,synchronize: true
    }),
    SchedulingModule],
  controllers: [],
  providers: [],
})
export class AppModule { 

}
