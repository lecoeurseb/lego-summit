module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	  	css: {
	      src: ['bower_components/normalize-css/normalize.min.css', 'stylesheets/main.min.css'],
	      dest: 'dist/styles.css',
	    },
	    js: {
	      src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/jquery.easing/js/jquery.easing.min.js', 'js/main.min.js'],
	      dest: 'dist/scripts.js',
	    },
	  },
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

};