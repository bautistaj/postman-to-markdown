import {
  readAuthorization,
  readRequestOptions,
  readFormDataBody,
  readQueryParams,
  readResponse,
  readMethods,
  readItems,
} from "../../src/util/read";

describe("Test `readAuthorization`", () => {
  test("Check readAuthorization function", () => {
      expect(readAuthorization).toBeDefined();
      expect(readAuthorization).toBeInstanceOf(Function);
  });
});

describe("Test `readRequestOptions`", () => {
  test("Check readRequestOptions function", () => {
      expect(readRequestOptions).toBeDefined();
      expect(readRequestOptions).toBeInstanceOf(Function);
  });
});

describe("Test `readFormDataBody`", () => {
  test("Check readFormDataBody function", () => {
      expect(readFormDataBody).toBeDefined();
      expect(readFormDataBody).toBeInstanceOf(Function);
  });
});

describe("Test `readQueryParams`", () => {
  test("Check readQueryParams function", () => {
      expect(readQueryParams).toBeDefined();
      expect(readQueryParams).toBeInstanceOf(Function);
  });
});

describe("Test `readResponse`", () => {
  test("Check readResponse function", () => {
      expect(readResponse).toBeDefined();
      expect(readResponse).toBeInstanceOf(Function);
  });
});

describe("Test `readMethods`", () => {
  test("Check readMethods function", () => {
      expect(readMethods).toBeDefined();
      expect(readMethods).toBeInstanceOf(Function);
  });
});

describe("Test `readItems`", () => {
  test("Check readItems function", () => {
      expect(readItems).toBeDefined();
      expect(readItems).toBeInstanceOf(Function);
  });
});

describe("Test 'readAuthorization'", () => {
  test("Check 'readAuthorization' function", () => {
      const data = {
          type: test,
          bearer: [test]
      }
      readAuthorization(data);
      expect(data.type).toEqual(test);
  });
});

describe("Test 'readRequestOptions'", () => {
  test("Check 'readRequestOptions' function", () => {
      const data = {
          header: ["string"],
          key: "string",
          value: "string",
          description: "string",
      }
      readRequestOptions(data);
      expect(data.key || data.value || data.description).toEqual("string");
  });
});

describe("Test 'readQueryParams'", () => {
  test("Check 'readQueryParams' function", () => {
      const data = {
          query: ["string"],
      }
      readQueryParams(data);
      expect(data.query).toEqual(["string"]);
  });
});

describe("Test 'readFormDataBody'", () => {
  test("Check 'readFormDataBody' function", () => {

      const data = {
          key: "string",
          value: "string",
          type: "string",
          mode: "string",
          raw: "any",
          formdata: ["any"],
      }
      readFormDataBody(data);
      expect(data.key || data.value || data.type || data.mode || data.raw || data.formdata).toEqual("string");
  });
});

// describe("Test 'readResponse'", () => {
//   test("Check 'readResponse' function", () => {
//       const data = {
//           length: 1,
//           responses: ["string"],
//       }
//       readResponse(data);
//       expect(data.length).toEqual("number");
//       expect(data.responses).toEqual(["string"]);
//   });
// });


describe("Test 'readMethods'", () => {
  test("Check 'readMethods' function", () => {
      const data = {
          description: "string",
          method: "string",
          url: "string",
          body: "string",
          auth: "string",
          header: ["string"],
          key: "string",
          value: "string",
      }
      readMethods(data);
      expect(data.description || data.method || data.url || data.body || data.auth || data.header || data.key || data.value).toEqual("string");
  });
});

