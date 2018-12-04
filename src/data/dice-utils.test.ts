import { times } from "ramda";

import { RandomTable } from "./types";
import { dieTest, lookupFromTable, dieResult, randRoll } from "./dice-utils";

describe("dice util methods", () => {
  describe("#dieTest", () => {
    it("parses a dieSpec string", () => {
      let spec = "d6";
      let result = dieTest.exec(spec);

      expect(result).not.toBe(null);
      expect(result![0]).toEqual(spec);
      expect(result![2]).toBe("6");

      spec = "2d6";
      result = dieTest.exec(spec);
      expect(result).not.toBe(null);
      expect(result![0]).toEqual(spec);
      expect(result![1]).toBe("2");
      expect(result![2]).toBe("6");
    });

    it("handles modifiers", () => {
      const spec = "1d6+1";
      const result = dieTest.exec(spec);

      expect(result).not.toBe(null);
      expect(result![3]).toBe("+1");
    });
  });

  describe("#randRoll", () => {
    it("produces a number between 1 and the supplied max | IMPURE RAND", () => {
      const max = 100;
      let result: number;
      times(() => {
        result = randRoll(max);
        expect(result).toBeLessThanOrEqual(max);
      }, 1000);
    });
  });

  describe("#dieRoll", () => {
    it("produces a curried function around randRoll", () => {
      const result = dieResult(6);
      expect(typeof result).toBe("function");
    });
  });

  describe("#lookupFromTable", () => {
    const table: RandomTable = [
      { minRoll: 1, description: "Foo" },
      { minRoll: 3, description: "Bar" },
      { minRoll: 6, description: "Baz" }
    ];

    const testLookup = lookupFromTable(table);
    it("returns a result from a RandomTable based on the number given", () => {
      const result = testLookup(3);
      expect(result).toEqual(table[1]);
    });

    it("returns the first table entry if it can't find a match", () => {
      const result = testLookup(-1);
      expect(result).toEqual(table[0]);
    });

    it("returns the last entry if the number is greater than the last minRoll", () => {
      const result = testLookup(10);
      expect(result).toEqual(table[2]);
    });
  });
});
