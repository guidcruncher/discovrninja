var pathsToModuleNameMapper = require('ts-jest').pathsToModuleNameMapper;
module.exports = {
    preset: 'ts-jest',
    moduleNameMapper: pathsToModuleNameMapper({
        "@controllers/*": ["src/controllers/*"],
        "@services/*": ["src/services/*"],
        "@customtypes/*": ["src/types/*"],
        "@helpers/*": ["src/helpers/*"],
        "@dto/*": ["src/dto/*"],
        "@schemas/*": ["src/schemas/*"],
        "@/*": ["src/*"],
    }),
    modulePaths: ['<rootDir>'],
    coverageDirectory: '../coverage',
    moduleFileExtensions: ['json', 'js', 'ts'],
    testRegex: '.*\\.spec\\.ts$',
    transform: { '^.+\\.(t|j)s$': 'ts-jest' },
    collectCoverageFrom: ['**/*.(t|j)s'],
};
