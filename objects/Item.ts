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

  increaseQuantity(qtyToAdd: number): void {
    if (typeof qtyToAdd !== "number") {
      return;
    }
    this.quantity += qtyToAdd;
  }
  decreaseQuantity(qtyToAdd: number): void {
    if (typeof qtyToAdd !== "number") {
      return;
    }
    this.quantity -= qtyToAdd;
  }
  defineQuantity(qtyToAdd: number): void {
    if (typeof qtyToAdd !== "number") {
      return;
    }
    this.quantity = qtyToAdd;
  }

  static findInListOfItems = (
    items: Array<Item>,
    stringToSearch: string
  ): Array<Item> => {
    const finded: Array<Item> = [];

    // If empty search, return all:
    if (stringToSearch === "") {
      return items;
    }

    items.forEach((item) => {
      if (
        item.name.toUpperCase().includes(stringToSearch.toUpperCase()) ||
        item.year.toString().includes(stringToSearch)
      ) {
        finded.push(item);
      }
    });

    return finded;
  };
}
export default Item;
