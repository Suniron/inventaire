class Item {
  name: string;
  quantity: number;
  year: number;
  genCodes: Array<number>;
  constructor(
    name: string,
    quantity: number,
    year: number,
    genCodes: Array<number>
  ) {
    this.name = name;
    this.quantity = quantity;
    this.year = year;
    this.genCodes = genCodes;
  }
}
export default Item;
