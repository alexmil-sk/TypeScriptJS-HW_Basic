import { Fruit } from './Fruit.js';

export abstract class Pineapple extends Fruit {
  showFullDescription(): string {
    return `This is pineapple's size ${this._size}. It has seeds: ${this._seeds} and color ${this._color}`;
  }
  showName(): string {
    return `This is pineapple's variety: ${this._variety}`;
  }
}
