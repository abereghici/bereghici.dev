module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
    node: true,
    worker: true,
  },
  globals: {
    globals: true,
    shallow: true,
    render: true,
    mount: true,
  },
  extends: ['eslint:recommended', 'react-app', 'react-app/jest', 'prettier'],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    camelcase: 'error',
    semi: ['error', 'always'],
    'global-require': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-console': ['error', { allow: ['error'] }],
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-shadow': ['error', { allow: ['data', 'contextValue', 'value'] }],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'index', 'sibling'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
