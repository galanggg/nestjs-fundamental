import { HttpException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entitiy';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Latte',
      brand: 'Coffee Point',
      flavors: ['Chocolate', 'Matcha'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Cofee with id ${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffees = this.findOne(id);
    if (existingCoffees) {
      //update the exist one
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.slice(coffeeIndex - 1);
    }
  }
}
