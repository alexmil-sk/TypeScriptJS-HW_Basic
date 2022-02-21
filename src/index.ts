
interface IRectCoord {
  readonly coordLeftUpX: number;
  readonly coordLeftUpY: number;
  readonly coordRightDownX?: number;
  readonly coordRightDownY?: number;
}

interface IRectSize {
  readonly width: number;
  readonly height: number;
}

interface ICircle {
  readonly centerX: number;
  readonly centerY: number;
  readonly radius: number;
}


export abstract class MyGraphicsPrimitive2D implements IRectCoord {
  readonly coordLeftUpX: number;
  readonly coordLeftUpY: number;
  readonly coordRightDownX?: number;
  readonly coordRightDownY?: number;

  constructor(coordLeftUpX: number, coordLeftUpY: number, coordRightDownX?: number, coordRightDownY?: number) {
    this.coordLeftUpX = coordLeftUpX,
    this.coordLeftUpY = coordLeftUpY,
    this.coordRightDownX = coordRightDownX,
    this.coordRightDownY = coordRightDownY
  }

  changePosition(n: number): string | undefined {

    if (this.coordRightDownX === undefined || this.coordRightDownY === undefined ) {
      console.log('Координаты нижней точки отсутствуют');
    } else {
      return `Смещение верхней координаты Х: ${this.coordLeftUpX + n}\n
            Смещение верхней координаты Y: ${this.coordLeftUpY + n}\n
            Смещение нижней координаты Х: ${this.coordRightDownX + n}\n
            Смещение нижней координаты Y: ${this.coordRightDownY + n}\n
            `
    }
  }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D implements IRectSize {
  readonly width: number;
  readonly height: number;

  constructor(coordLeftUpX: number, coordLeftUpY: number, width: number, height: number) {
    super(coordLeftUpX, coordLeftUpY),
    this.width = width,
    this.height = height
  }

  getRectSquare(): string {
    const resultRect = this.width * this.height;
    return `Площадь прямоугольника шириной ${this.width} см и высотой ${this.height} см равна ${resultRect} см2`;
  }
}

class MyRectangle  extends MyAreaPrimitive2D {
  constructor(coordLeftUpX: number, coordLeftUpY: number, width: number, height: number) {
    super(coordLeftUpX, coordLeftUpY, width, height)
  }
}

const newRectangle: MyRectangle = new MyRectangle(0, 0, 20, 20);
console.log(newRectangle.getRectSquare());


//type CircleData = Omit<MyAreaPrimitive2D, 'width' | 'height'>

class MyCircle extends MyAreaPrimitive2D implements ICircle {
  readonly centerX: number;
  readonly centerY: number;
  readonly radius: number;

  constructor(coordLeftUpX: number, coordLeftUpY: number, radius: number) {
    super(coordLeftUpX, coordLeftUpY, 0, 0),
    this.centerX = coordLeftUpX,
    this.centerY = coordLeftUpY,
    this.radius = radius
  }

  getCircleSquare(): string {
    const resultCircle = ((Math.PI * ((2 * this.radius) ** 2)) / 4).toFixed(2);
    return `Площадь круга с координатами центра X: ${this.centerX}, Y: ${this.centerY} и радиусом ${this.radius}см равна ${resultCircle} см2`;
  }
}

const newCircle: MyCircle = new MyCircle(0, 0, 10);
console.log(newCircle.getCircleSquare());
