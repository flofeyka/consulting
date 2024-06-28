module.exports =  {
  extends: 'stylelint-config-standard-scss',
  rules: {
      'no-empty-source': null,
      'at-rule-empty-line-before': 'never',
      'scss/dollar-variable-empty-line-before': null,
      'selector-class-pattern': [
          '^\.[a-z0-9]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(_([a-z0-9]+-?)+){0,2}$',
          {
              resolveNestedSelectors: true,
              message: function expected(selectorValue) {
                  return `Expected class selector "${selectorValue}" to match BEM CSS pattern`;
              },
          },
      ],
      'declaration-no-important': true,
      'at-rule-empty-line-before': 'always'
  },
  ignoreFiles: ['dist/**/*'],
};

