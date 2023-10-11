import strictEquals from "./index";

describe("Given a strictEquals function", () => {
  describe("When it receives values 1 and 1", () => {
    test("Then it should return true", () => {
      const valueB = 1;
      const valueA = 1;
      const isExpectedValue = true;

      const comparationValues = strictEquals(valueA, valueB);

      expect(comparationValues).toBe(isExpectedValue);
    });
  });
});
describe("Given a strictEquals function", () => {
  describe("When it receives values false and false", () => {
    test("Then it should return true", () => {
      const valueA = false;
      const valueB = false;
      const expected = true;

      const valuesComparation = strictEquals(valueA, valueB);

      expect(valuesComparation).toBe(expected);
    });
  });
});
