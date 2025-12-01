export default [
  {
    files: ['**/*.js', '**/*.tsx'], //only check .js files
    rules: {
      semi: 'off', //enforce semicolons at the end of statements
      'no-unused-vars': 'off', //warn about variables that are declared but not used
      'no-console': 'off', //allow console statements
    },
  },
];
