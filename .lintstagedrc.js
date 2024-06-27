module.exports = {
  "**/*.{ts,tsx,js,jsx}": [
    "eslint --cache --fix --cache-location ./node_modules/.cache/.eslintcache",
  ],
  "**/*.vue": [
    "eslint --cache --fix --cache-location ./node_modules/.cache/.eslintcache",
  ],
  "**/*.{css,less}": [
    "stylelint --cache --fix --cache-location ./node_modules/.cache/.eslintcache",
  ],
};
