class A {
  _items = [];

  initialize(items) {
    this._items = items;
  }

  getItems() {
    return this._items;
  }
}

exports.A = A;

console.log("a loaded");
exports.a = new A();
