const { override, fixBabelImports ,addLessLoader} = require('customize-cra');

module.exports = override(
    addLessLoader(),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);