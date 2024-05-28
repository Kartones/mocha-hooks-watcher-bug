const { a } = require("../lib/a.js");

exports.mochaHooks = {
  beforeEach() {
    a.initialize(["testItem1", "testItem2"]);
    console.log("mochaHooks beforeEach():", a.getItems());
  },
};
