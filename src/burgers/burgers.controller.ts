import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BurgersService } from './burgers.service';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';

@Controller('/burger')
export class BurgersController {
  constructor(private readonly burgersService: BurgersService) {}

  @Post()
  create(@Payload() createBurgerDto: CreateBurgerDto) {
    return this.burgersService.create(createBurgerDto);
  }

  @Get()
  findAll() {
    return this.burgersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.burgersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBurgerDto: UpdateBurgerDto) {
    return this.burgersService.update(id, updateBurgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.burgersService.remove(id);
  }
}
