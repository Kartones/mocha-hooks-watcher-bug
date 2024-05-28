const assert = require("assert");

const { a } = require("../lib/a.js");

const { B } = require("../component/b.js");

describe("Always working", () => {
  beforeEach(() => {
    a.initialize(["testItem1", "testItem2"]);
  });

  it("should return two items", () => {
    const b = new B();
    assert.deepEqual(b.getItems(), ["testItem1", "testItem2"]);
  });
});
