module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    extends: ['eslint:recommended'],
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 2],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'key-spacing': [ 'error', { 'afterColon': true }],
        'comma-spacing': ['error', { 'after': true, 'before': false }],
        'no-trailing-spaces': ['error'],
        'no-multi-spaces': 'error',        
        'no-param-reassign': ['error', { props: false }],
        'object-curly-newline': [0],
        'lines-between-class-members': ['error', 'always'],
        'arrow-body-style': 0,
        'no-underscore-dangle': 0,
        'no-nested-ternary': 1,
        'no-duplicate-imports': 'error',
        'eol-last': ['error', 'always']
    }
};