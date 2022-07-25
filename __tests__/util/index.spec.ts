import {
  createStructureOfMarkdown,
} from '../../src/util/index'


describe("Test `createStructureOfMarkdown`", () => {
  test("Check if init function is defined", () => {
    expect(createStructureOfMarkdown).toBeDefined();
  });
});

describe("Test 'createStructureOfMarkdown'", () => {
  test("Check 'createStructureOfMarkdown' function", () => {
    const data = {
      info: {
        description: "string",
        name: "string"
      },
      item: [
        {
          name: "string",
        }
      ]
    }
    createStructureOfMarkdown(data);
    expect(data.info.description).toEqual("string");
  });
});
