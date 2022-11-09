module.exports = {
  root: true,
  extends: ['@react-native-community','react-app'],
  plugins: ['prettier'],
  rules: {
    quotes: [1, 'single'],
    'prettier/prettier': [
        'error',
        {
            endOfLine: 'auto',
        },
    ],
}
};
