module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    semi: ['error', 'never'],
    quotes: ['error', 'single', { 'avoidEscape': true }],
    indent: ['error', 2],
    'react-native/no-inline-styles': 0,
  },
}
