module.exports = {
	extends: 'stylelint-config-standard',
	ignoreFiles: 'node_modules/{,**/}*',
	rules: {
		indentation: [
			'tab',
			{
				except: [ 'value' ]
			}
		]
	}
};
