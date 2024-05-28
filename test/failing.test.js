const assert = require("assert");

const { B } = require("../component/b.js");

describe("Failing on watch reload", () => {
  it("should return two items", () => {
    const b = new B();
    assert.deepEqual(b.getItems(), ["testItem1", "testItem2"]);
  });
});
