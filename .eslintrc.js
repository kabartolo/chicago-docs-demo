module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'jsx-a11y',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-pascal-case': [0],
    'import/prefer-default-export': 0,
  }
};
