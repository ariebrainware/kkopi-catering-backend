module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:css-modules/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      classes: true,
    },
    sourceType: 'module'
  },
  globals: {
    'google': true,
    '__VERSION__': true,
    '__ENV__': true,
    '__PROD__': true,
    '__BUILD_TARGET__': true,
    '$': true,
    '__DEV__': true,
  },
  plugins: ['import', 'css-modules', 'json'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    camelcase: 0,
    'max-len': 0,
    'linebreak-style': ['error', 'unix'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': [0],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'lines-between-class-members': ['error', 'always'],
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
    'no-nested-ternary': 1,

    // import
    'import/no-unresolved': [2, { ignore: ['config/message$'] }],
    'import/prefer-default-export': 0,

    // css
    'css-modules/no-unused-class': 1,
  },
  overrides: [
    {
      files: ['**/sagas/*.js'],
      rules: {
        'no-restricted-syntax': ['error', 'FunctionExpression', 'WithStatement'],
      },
    },
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
        ]
      }
    }
  },
};
