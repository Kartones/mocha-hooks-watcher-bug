const { a } = require("./lib/a.js");
const { B } = require("./component/b.js");

const items = ["item1", "item2"];
a.initialize(items);

const b = new B();
console.log("b.getItems():", b.getItems());
