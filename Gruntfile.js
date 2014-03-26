/* jshint node:true */

var fs = require('fs');

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-replace');

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		clean : {
			appServerDist : ['appServerDist/**']
		},
		concat : {
			css : {

				src : ['dev/lib/theme/github.css','dev/lib/theme/styles/github.css'],
				dest : 'release/markdownhtml.css',
			},
			js : {

				src : ['dev/lib/marked.js', 'dev/lib/highlight.pack.js','dev/lib/markdownHTML.js'],
				dest : 'release/markdownhtml.js',
			}
		},

		uglify : {
			'release/markdownhtml.min.js' : ['markdownhtml.js']
		},
		

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-targethtml');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-bower-task');


	grunt.registerTask('build', ['concat', 'uglify']);

};
