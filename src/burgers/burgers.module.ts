import { Module } from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { BurgersController } from './burgers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Burger } from './entities/burger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Burger])],
  controllers: [BurgersController],
  providers: [BurgersService]
})
export class BurgersModule {}
