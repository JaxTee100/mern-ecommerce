export default [
  {
    files: ['**/*.js', '**/*.tsx'], //only check .js files
    rules: {
      semi: 'error', //enforce semicolons at the end of statements
      'no-unused-vars': 'warn', //warn about variables that are declared but not used
      'no-console': 'off', //allow console statements
    },
  },
];
