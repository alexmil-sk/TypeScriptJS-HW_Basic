import { Apple } from '../models/Apple.js';


export class AppleController{
  constructor(private _connector: DBHelper) {}

  getAllApplesFromDB(): Apple[] {
    const result = this._connector.simpleDet('get all apples');
    return [result];
  }

  getInfoForMainPage(): ApplePreviewMain {
    const result = this._connector.simpleGet('Get all apples');
    return { taste: 'spicy' };
  } 
}
