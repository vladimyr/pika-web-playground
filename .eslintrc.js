'use strict';

module.exports = {
  root: true,
  extends: '@vladimyr',
  rules: {
    'import/no-absolute-path': 'off'
  },
  overrides: [{
    files: ['*'],
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    }
  }]
};
