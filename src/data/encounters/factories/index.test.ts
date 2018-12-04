import { commoners } from "./barovian-commoners";
import { scouts } from "./barovian-scouts";
import { ghost } from "./ghost";
import { nlpNounPlugin } from "./index";

describe("#nlpNounPlugin", () => {
  const factories = [commoners, scouts];
  const expected = {
    words: {
      ...commoners.dictionary!.words,
      ...scouts.dictionary!.words
    },
    plurals: {
      ...commoners.dictionary!.plurals,
      ...scouts.dictionary!.plurals
    }
  };

  it("constructs a 'compromise' plugin from the aggregated dictionaries of the factories", () => {
    const result = nlpNounPlugin(factories);
    expect(result).toEqual(expected);
  });

  it("skips factories which don't have a dictionary", () => {
    const result = nlpNounPlugin([...factories, ghost]);
    expect(result).toEqual(expected);
  });
});
