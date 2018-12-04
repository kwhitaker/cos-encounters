import genericEncounter from "./generic-encounter";

describe("#genericEncounter", () => {
  it("returns the encounter given it", () => {
    const testEnc = {
      encounter: "Foo",
      description: "Bar"
    };

    const result = genericEncounter(testEnc)();
    expect(result).toEqual(testEnc);
  });
});
