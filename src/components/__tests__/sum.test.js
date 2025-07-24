const { Sum } = require("../sum");

test("should do calculation of two numbers ", () => {
  const result = Sum();
  expect(result).toBe(99);
});
