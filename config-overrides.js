const path = require('path')

const { fixBabelImports, addDecoratorsLegacy, override } = require('customize-cra')

const custom = () => config => {
  config['resolve']['alias']['@'] = path.resolve('./src')
  return config
}

const fix = () => fixBabelImports("import" ,{  //配置上babel-plugin-import
  libraryName: 'antd',    //针对的antd
  libraryDirectory: 'es', //源码文件夹中的es文件
  style: 'css',     // 自动打包相关的css文件
})

module.exports = override(
  addDecoratorsLegacy(),
  custom(),
  fix()
)