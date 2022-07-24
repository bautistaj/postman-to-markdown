import minimist from 'minimist';
import { init } from '../src/index';

describe("Index Test initialization", () => {
    test("Check init function", () => {
        expect(init).toBeDefined();
        expect(init).toBeInstanceOf(Function);
    });
});

describe("Index Test initialization", () => {
    test("Check init function", () => {
        const args = minimist(process.argv.slice(2));
        init();
        expect(args).toBeDefined();
        expect(args).toBeInstanceOf(Object);
    });
    test("Check init function", () => {
        const chalk = require('chalk');
        init();
        expect(chalk).toBeDefined();
    });
    test("Check init function", () => {
        const path = "./postman_collection.json";
        init();
        expect(path).toBeDefined();
    });
});


//# sourceMappingURL=index.spec.js.map
// Language: typescript
// Path: __tests__/index.spec.ts
