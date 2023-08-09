export default {
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: "jsdom"
}