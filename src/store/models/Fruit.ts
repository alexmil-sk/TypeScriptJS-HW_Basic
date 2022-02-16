import { seedsVariant, fruitSize } from './types.js';

export abstract class Fruit {
  protected abstract _color: string;
  protected abstract _seeds: seedsVariant;
  protected abstract _taste: string;
  protected abstract _size: fruitSize;
  protected abstract _variety: string;

  abstract showFullDescription(): string;

  abstract showName(): string;

  get color(): string {
    return this._color;
  }

  get seeds(): string {
    return this._seeds;
  }

  get taste(): string {
    return this._taste;
  }
}
