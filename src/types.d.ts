/* eslint-disable no-unused-vars */


export declare interface IDatabase {
    id: string,
    title: string,
    details: string,
    photos: Array<string>,
    coordinates: Array<number>,
    bookedDates?: Array<unknown>,
    price: number
  }

export declare function cloneDate(date: Date): object;
export declare function addDays(date: Date, days: number): object;

export declare const backendPort: number;
export declare const localStorageKey: string;

export declare class FlatRentSdk {
  get(id: IDatabase): Promise<unknown>;
  
  search(parameters: string): Promise<unknown>;
  
  book(flatId: IDatabase, checkInDate: unknown, checkOutDate: unknown): Promise<unknown>;
  _assertDatesAreCorrect(checkInDate: unknown, checkOutDate: unknown): void;
  _resetTime(date: string | object): void;
  _calculateDifferenceInDays(startDatobjectany, endDate: object): number;
  _generateDateRange(from: object, to: object): Date[];
  _generateTransactionId: () => number;
  _areAllDatesAvailable(flat: object, dateRange: Array<string>): string;
  _formatFlatObject(flat: object, nightNumber: object): string;
  _readDatabase(): string;
  _writeDatabase(database: IDatabase[]): void;
  _syncDatabase(database: IDatabase[]): void;
}








