import { writeFile, writeDirectory } from "../../src/util/write";

describe("Test `writeFile`", () => {
  test("Check writeFile function", () => {
      expect(writeFile).toBeDefined();
      expect(writeFile).toBeInstanceOf(Function);
  });
});

describe("Test `writeDirectory`", () => {
  test("Check writeDirectory function", () => {
      expect(writeDirectory).toBeDefined();
      expect(writeDirectory).toBeInstanceOf(Function);
  });
});

// describe("Test 'writeFile'", () => {
//   test("Check 'writeFile' function", () => {
//       const data = {
//           content: "string",
//           fileName: "string",
//       }
//       writeFile(data.content, data.fileName);
//       expect(data.content || data.fileName).toEqual("string");
//   });
// });

