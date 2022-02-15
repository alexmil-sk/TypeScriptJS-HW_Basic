/* eslint-disable no-unused-vars */


declare interface IDatabase {
    id: string,
    title: string,
    details: string,
    photos: Array<string>,
    coordinates: Array<number>,
    bookedDates?: Array<unknown>,
    price: number
  }

declare function cloneDate(date: Date): object;
declare function addDays(date: Date, days: number): object;

declare const backendPort: number;
declare const localStorageKey: string;

declare class FlatRentSdk {
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








