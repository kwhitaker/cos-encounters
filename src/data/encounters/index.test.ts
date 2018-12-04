import { EncounterFactory } from "../types";
import genericEncounter from "./generic-encounter";
import { buildEncountersMap } from "./index";

describe("#buildEncountersMap", () => {
  const factories: EncounterFactory[] = [
    {
      dayRoll: 1,
      factory: genericEncounter({
        encounter: "Foo",
        description: "bar"
      })
    },
    {
      nightRoll: 3,
      factory: genericEncounter({
        encounter: "Baz",
        description: "Bing"
      })
    },
    {
      dayRoll: 2,
      nightRoll: 2,
      factory: genericEncounter({
        encounter: "Aha",
        description: "Boo"
      })
    }
  ];

  it("builds a hashmap of encounter factories filtered by the rollProp provided", () => {
    const result = buildEncountersMap(factories)("dayRoll");
    const resultKeys = Object.keys(result);

    expect(resultKeys).toHaveLength(2);
    expect(resultKeys).not.toContain(factories[1].nightRoll!.toString());
    expect(result[1]()).toEqual(factories[0].factory());
  });
});
