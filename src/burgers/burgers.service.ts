import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';
import { Burger } from './entities/burger.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BurgersService {

  constructor(@InjectRepository(Burger) private burgerRepository: Repository<Burger>){}

  create(createBurgerDto: CreateBurgerDto) {
    createBurgerDto.id = uuidv4();
    return this.burgerRepository.save(createBurgerDto);
  }

  findAll() {
    return this.burgerRepository.find();
  }

  findOne(id: string) {
    return this.burgerRepository.findOne(id);
  }

  update(id: string, updateBurgerDto: UpdateBurgerDto) {
    return this.burgerRepository.update(id, updateBurgerDto);
  }

  remove(id: string) {
    return this.burgerRepository.delete(id);
  }
}
