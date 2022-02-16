

export class DBHeper {
  private connector: string = 'mysql connect';

  simpleGet(query: string): string {
    return `We get from db with ${this.connector} ${query}`;
  }
}
