import { NLPPlugin } from "./types";
import { aFor1, calculatedCounts, calculateEncounter } from "./calculators";
import genericEncounter from "./encounters/generic-encounter";

describe("calculator functions", () => {
  describe("#aFor1", () => {
    it("replaces a leading `1` with `a` in a string", () => {
      const str = "1 bandit";
      const result = aFor1(str);
      expect(result).toBe("a bandit");
    });
  });

  describe("#calculatedCounts", () => {
    it("returns a total result that is less than or equal to the max of the die spec provided | IMPURE RAND", () => {
      const spec = "2d6";
      const min = 2;
      const max = 12;
      const result = parseInt(calculatedCounts(spec), 0);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it("handles accounts for modifiers | IMPURE RAND", () => {
      const spec = "1d6+1";
      const min = 1;
      const max = 7;
      const result = parseInt(calculatedCounts(spec), 0);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });

  describe("#calculateEncounter", () => {
    const dictPlugin: NLPPlugin = {
      words: {
        foo: "Noun"
      },
      plurals: {
        foo: "foos"
      }
    };

    it("returns a pluralized string with correct grammar", () => {
      const factory = genericEncounter({
        encounter: "2d6 foo",
        description: "bar your baz"
      });

      const result = calculateEncounter(dictPlugin)(factory);
      expect(result.encounter.match(dictPlugin.plurals!.foo)).not.toBe(null);
    });

    it("returns a singular string with correct grammar", () => {
      const factory = genericEncounter({
        encounter: "1 foos",
        description: "bar your baz"
      });

      const result = calculateEncounter(dictPlugin)(factory);
      expect(result.encounter.match(dictPlugin.plurals!.foo)).toBe(null);
    });
  });
});
