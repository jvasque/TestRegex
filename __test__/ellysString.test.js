const EllysBalancedStrings = require("../ellysString");

describe("EllysBalancedStrings", function () {
  test("should return 1 if string passed is 'BANANA'", () => {
    var string = "TOPCODER";
    expect(EllysBalancedStrings(string)).toBe(1);
  });
  test("should return 0 if string passed is 'BANANA'", () => {
    var string = "BANANA";
    expect(EllysBalancedStrings(string)).toBe(0);
  });
  test("should return message Error if string length is < 2", () => {
    var string = "B";
    expect(EllysBalancedStrings(string)).toBe("The string must contain between 2 and 100 characters");
  });
  test("should return message Error if string isn't even", () => {
    var string = "KKK";
    expect(EllysBalancedStrings(string)).toBe("The string must contain an even number of characters.");
  });
});
