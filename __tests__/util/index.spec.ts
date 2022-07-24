import {
    createStructureOfMarkdown,
    readAuthorization,
    readRequestOptions,
    readFormDataBody,
    readQueryParams,
    readResponse,
    readMethods,
    readItems,
    writeFile
} from '../../src/util/index'


describe("Test `createStructureOfMarkdown`", () => {
    test("Check if init function is defined", () => {
        expect(createStructureOfMarkdown).toBeDefined();
    });
});

describe("Test `readAuthorization`", () => {
    test("Check if init function is defined", () => {
        expect(readAuthorization).toBeDefined();
    });
});

describe("Test `readRequestOptions`", () => {
    test("Check if init function is defined", () => {
        expect(readRequestOptions).toBeDefined();
    });
});

describe("Test `readFormDataBody`", () => {
    test("Check if init function is defined", () => {
        expect(readFormDataBody).toBeDefined();
    });
});

describe("Test `readQueryParams`", () => {
    test("Check if init function is defined", () => {
        expect(readQueryParams).toBeDefined();
    });
});

describe("Test `readResponse`", () => {
    test("Check if init function is defined", () => {
        expect(readResponse).toBeDefined();
    });
});

describe("Test `readMethods`", () => {
    test("Check if init function is defined", () => {
        expect(readMethods).toBeDefined();
    });
});

describe("Test `readItems`", () => {
    test("Check if init function is defined", () => {
        expect(readItems).toBeDefined();
    });
});

describe("Test `writeFile`", () => {
    test("Check if init function is defined", () => {
        expect(writeFile).toBeDefined();
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

describe("Test 'readResponse'", () => {
    test("Check 'readResponse' function", () => {
        const data = {
            length: 1,
            responses: ["string"],
        }
        readResponse(data);
        expect(data.length).toEqual("number");
        expect(data.responses).toEqual(["string"]);
    });
});


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

describe("Test 'writeFile'", () => {
    test("Check 'writeFile' function", () => {
        const data = {
            content: "string",
            fileName: "string",            
        }
        writeFile(data.content, data.fileName);
        expect(data.content || data.fileName).toEqual("string");
    });
});

