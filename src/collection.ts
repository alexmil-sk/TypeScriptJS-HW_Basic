/*_В коллекции для удобно работы необходима следующие встроенные методы:
- количество элементов в коллекции,
- добавление элемента в коллекцию,
- получение данных элемента коллеции при вызове,
- поиск / подтверждение о наличии элемента в коллекции,
- удаление элемента из коллекции,
- полное очищение коллекции
*/

export class Collection<V, K extends number | string | Symbol = string> {

  items: Record<K,V> = {} as Record<K,V>;

  get size(): number {
    return Object.keys(this.items).length;
  }

  set(key: K, value: V): void {
    this.items[key] = value;
    console.log(`Элемент коллекции ${value} создан`);
  }

  get(key: K): V {
    return this.items[key];
  }

  has(key: K): boolean {
    return Boolean(this.items[key]);
  }

  //delete(key: K): boolean {
  //  if (this.has(key)) {
  //    return this.items.filter(el => el.key !== key);
  //  }
  //}

  delete(key: K): boolean {
    return this.has(key);
  }

  clean(): void {
    this.items = {} as Record<K,V>;
  }

}

//const myCollection: Collection<number, string> = new Collection();

//myCollection.get();
