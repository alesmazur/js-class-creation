class Guitar {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.quantity = 0;
  }
  upQty() {
    this.quantity += 1;
  }
}

const newGuitar = new Guitar("Fender", "Jaguar");

console.table(newGuitar);
