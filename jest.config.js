const esModules = [].join("|")

module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    verbose: true,
    roots: ["./"],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFiles: ["@testing-library/react/dont-cleanup-after-each"],
    setupFilesAfterEnv: [
        // "@testing-library/react/cleanup-after-each",
        "@testing-library/jest-dom/extend-expect",
    ],

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}
