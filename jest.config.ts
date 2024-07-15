/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// Type imports.
import type { Config } from "jest";

// Const for coverage threshold.
const customCoverageThreshold = {
  // // Test coverage for branch must be above 93%.
  // branches: 93,
  // // Test coverage for functions must be above 93%.
  // functions: 93,
  // // Test coverage for lines must be above 93%.
  // lines: 93,
  // // At most 20 statements can be uncovered.
  // statements: -20,
};

const config: Config = {
  // Automatically mock all import modules to maintain API surface.
  // automock: true,

  // Fail after the first test failure, fix the code first before proceeding.
  // bail: true,

  // Automatically clear mock calls/instances between tests.
  clearMocks: true,

  // The collect coverage configuration.
  collectCoverage: true,

  // The collect coverage from files configuration.
  collectCoverageFrom: [
    "src/**/*.{mjs,js,jsx,ts,tsx}",
    // Define exclusions after inclusions to take affect.
  ],

  // The coverage directory.
  coverageDirectory: "coverage",

  // Dirs to ignore for coverage.
  coveragePathIgnorePatterns: ["src/models/v1/userInterfaces.ts"],

  coverageProvider: "v8",

  // The coverage report configuration.
  coverageReporters: [
    "json",
    "lcov",
    // Only show partially covered files for text output.
    // ['text', {skipFull: true}],
    "text",
    "clover",
  ],

  // Mininum threshold enforcement for coverage.
  coverageThreshold: {
    global: customCoverageThreshold,
  },

  // Print the project name.
  displayName: "research-mentorship-backend-lite-jest",

  // For smaller projects, turn on errorOnDeprecated to catch deprecations.
  errorOnDeprecated: false,

  // The default configuration for fake timers
  // fakeTimers: {
  //   'enableGlobally': false
  // },

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: '50%',

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   'node_modules'
  // ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // Must match `tsconfig.json` paths.
  moduleNameMapper: {
    
    // ESNEXT compliance mapping. IMPORTANT!!
    // Must be placed before any other mappings to resolve correctly.
    // Source module files with specific handling for `.js` extensions.
    "^@src/(.*)\\.js$"        : "<rootDir>/src/$1.ts",

    "^@config/(.*)\\.js$"     : "<rootDir>/src/config/$1.ts",
    "^@controllers/(.*)\\.js$": "<rootDir>/src/controllers/$1.ts",
    "^@errors/(.*)\\.js$"     : "<rootDir>/src/errors/$1.ts",
    "^@interfaces/(.*)\\.js$" : "<rootDir>/src/interfaces/$1.ts",
    "^@middlewares/(.*)\\.js$": "<rootDir>/src/middlewares/$1.ts",
    "^@mocks/(.*)\\.js$"      : "<rootDir>/src/mocks/$1.ts",
    "^@models/(.*)\\.js$"     : "<rootDir>/src/models/$1.ts",
    "^@routes/(.*)\\.js$"     : "<rootDir>/src/routes/$1.ts",
    "^@services/(.*)\\.js$"   : "<rootDir>/src/services/$1.ts",
    "^@utils/(.*)\\.js$"      : "<rootDir>/src/utils/$1.ts",

    // Test module files.
    "^@__tests__/(.*)$"   : "<rootDir>/__tests__/$1",

    "^@__features__/(.*)$": "<rootDir>/__tests__/__features__/$1",

    // Source module files.
    "^@src/(.*)$"        : "<rootDir>/src/$1",

    "^@config/(.*)$"     : "<rootDir>/src/config/$1",
    "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^@errors/(.*)$"     : "<rootDir>/src/errors/$1",
    "^@interfaces/(.*)$" : "<rootDir>/src/interfaces/$1",
    "^@middlewares/(.*)$": "<rootDir>/src/middlewares/$1",
    "^@mocks/(.*)$"      : "<rootDir>/src/mocks/$1",
    "^@models/(.*)$"     : "<rootDir>/src/models/$1",
    "^@routes/(.*)$"     : "<rootDir>/src/routes/$1",
    "^@services/(.*)$"   : "<rootDir>/src/services/$1",
    "^@utils/(.*)$"      : "<rootDir>/src/utils/$1",
  },

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates native OS's notifications for test results, requires `node-notifier`.
  // notify: true,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: 'failure-change',

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest/presets/js-with-ts-esm",

  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  reporters: ["default"],

  // Automatically reset mock state before every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  rootDir: "./",

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   '<rootDir>/src',
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: 'jest-runner',

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>//jest.setup.ts"],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  slowTestThreshold: 3,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  testLocationInResults: true,

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/?(*.)+(spec|test).ts?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/__tests__/__features__/",
    "/coverage",
    "/dist/",
    "/docs/",
    "/.husky/",
    "/node_modules/",
    "/(temp|tmp)/",
  ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: '(/__tests__/[^/]*\\.(test|spec))\\.tsx?$',

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: 'jest-circus/runner',

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default config;
