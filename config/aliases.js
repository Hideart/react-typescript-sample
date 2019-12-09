const path = require('path');

const alias = {
    'react-native': 'react-native-web',
    '@': path.resolve('./src'),
};

module.exports = {
    alias,
};
