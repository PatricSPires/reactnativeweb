module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/types.ts',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '../../node_modules/*'],
  // transformIgnorePatterns: ['../../node_modules/'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
}
