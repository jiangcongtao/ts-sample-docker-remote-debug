module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'no-console': 0,
    },
};
