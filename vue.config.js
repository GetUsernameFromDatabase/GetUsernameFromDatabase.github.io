const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/GetUsernameFromDatabase.github.io/'
    : '/',
	css: {
		loaderOptions: {
			sass: {
				additionalData: bootstrapSassAbstractsImports.join('\n')
			},
			scss: {
				additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
			}
		}
	}
};