class Item {
  name: string;
  quantity: number;
  year: number;
  genCode: number;
  constructor(name: string, quantity = 0, year = 0, gencode = 0) {
    this.name = name;
    this.quantity = quantity;
    this.year = year;
    this.genCode = gencode;
  }
}
export default Item;
