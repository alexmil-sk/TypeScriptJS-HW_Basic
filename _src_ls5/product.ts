
export class Product {
  protected _price: number = 0;
  get price(): number {
    return this._price;
  }
  protected description = '';

  constructor(price: number) {
    this._price = price;
  }
} 
