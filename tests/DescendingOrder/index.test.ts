import { descendingOrder } from '../../src/DescendingOrder';
import { assert } from "chai";

describe("DescendingOrder", function() {
  it("should return some sample numbers in descending order", function() {
    assert.strictEqual(descendingOrder(0), 0);
    assert.strictEqual(descendingOrder(1), 1);
    assert.strictEqual(descendingOrder(123456789), 987654321);
  });
});