const { a } = require("../lib/a.js");

class B {
  getItems() {
    return a.getItems();
  }
}

exports.B = B;
