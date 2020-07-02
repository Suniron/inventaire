class Item {
  id: string;
  name: string;
  quantity: number;
  year: number;
  genCodes: Array<number>;
  category: string;
  constructor(
    id: string,
    name: string,
    quantity: number,
    year: number,
    genCodes: Array<number>,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.year = year;
    this.genCodes = genCodes;
    this.category = category;
  }

  increaseQuantity(qtyToAdd: number) {
    if (typeof qtyToAdd !== "number") {
      return;
    }
    console.log(typeof this.quantity);
    this.quantity += qtyToAdd;
    console.log(this.quantity);
  }
  decreaseQuantity(qtyToAdd: number) {
    if (typeof qtyToAdd !== "number") {
      return;
    }
    this.quantity -= qtyToAdd;
  }
  defineQuantity(qtyToAdd: number) {
    if (typeof qtyToAdd !== "number") {
      return;
    }
    this.quantity = qtyToAdd;
  }
}
export default Item;
