import { Fruit } from './Fruit.js';
import { seedsVariant, fruitSize } from './types.js';

export class Apple extends Fruit {
  _color: string;
  _seeds: seedsVariant = 'hard';
  _taste: string = 'sour';
  _size: fruitSize = 'medium';
  _variety: string = 'Macintoch';
  whereIsFrom!: 'Holland';


  showFullDescription(): string {
    return `This apple is from ${this.whereIsFrom} It has seeds: ${this._seeds} and color ${this._color}`;
  }

  showName(): string {
    throw new Error('Method not implemented.');
  }

  set color(color: 'green' | 'red' | 'yellow'): string {
    this._color = color;
  }

}

