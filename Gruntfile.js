/* global module */
module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({

		// Configure the compass task to compile the sass files.
		compass: {
			// TODO: Configure source maps.
			compile: {
				options: {
					cssDir: 'css',
					outputStyle: 'compressed',
					sassDir: 'src/scss'
				}
			},
			'compile-demo2': {
				options: {
					cssDir: 'demo/demo2/css',
					outputStyle: 'compressed',
					sassDir: 'demo/demo2/src/scss'
				}
			},
			'compile-demo3': {
				options: {
					cssDir: 'demo/demo3/css',
					outputStyle: 'compressed',
					sassDir: 'demo/demo3/src/scss'
				}
			}
		},

		// Configure the concat task to combine all libraries into one file.
		concat: {
			app: {
				src: 'src/js/**/*.js',
				dest: 'js/app.js'
			},
			'libs-demo': {
				src: [
					'bower_components/jquery/jquery.min.js',
					'bower_components/jquery-ui/ui/minified/jquery.ui.widget.min.js',
					'bower_components/moment/min/moment.min.js',
					'bower_components/d3/d3.min.js',
					'bower_components/jke-d3-calendar/dist/jke-d3-calendar.min.js',
					'bower_components/jke-d3-ecg/dist/jke-d3-ecg.min.js'
				],
				dest: 'js/libs-demo.js'
			},
			libs: {
				src: [
					'bower_components/jquery/jquery.min.js',
					'bower_components/impress.js/js/impress.js',
					'bower_components/moment/min/moment.min.js',
					'bower_components/d3/d3.min.js',
					'bower_components/prism/prism.js',
					'lib/impress.console.js'
				],
				dest: 'js/libs.js'
			}
		},

		// Configure the connect task to start a web server for the demo.
		connect: {
			demo: {
				options: {
					base: '.',
					livereload: true,
					port: 3000
				}
			}
		},

		// Configure the copy task to copy all fonts from bower_components.
		copy: {
			fonts: {
				expand: true,
				flatten: true,
				src: [
					'bower_components/font-awesome/fonts/*',
					'!bower_components/font-awesome/fonts/*.otf'
				],
				dest: 'fonts/'
			}
		},

		// Configure the gh-pages to publish the demo directory to GitHub pages.
		'gh-pages': {
			options: {
				base: '.'
			},
			src: [
				'code/**/*',
				'css/**/*',
				'demo/**/*',
				'fonts/**/*',
				'images/**/*',
				'js/**/*',
				'index.html'
			]
		},

		// Configure the jshint task to check the syntax of all JavaScript files.
		jshint: {
			all: {
				options: {
					jshintrc: '.jshintrc',
					force: true
				},
				src: ['Gruntfile.js', 'src/js/**/*.js']
			}
		},


		// Configure the uglify task to concatenate and optimize all JavaScript files.
		//		uglify: {
		//			// TODO: Configure source maps.
		//			dist: {
		//				src: 'src/js/**/*.js',
		//				dest: 'js/app.js'
		//			}
		//		},

		// Configure the watch task to listen to changes to relevant files and run the correct tasks.
		watch: {
			options: {
				livereload: true
			},
			compass: {
				files: ['Gruntfile.js', 'src/scss/**/*.scss', 'demo/**/*.scss'],
				tasks: ['compass']
			},
			concat: {
				files: ['Gruntfile.js', 'src/js/**/*.js'],
				tasks: ['concat:app']
			},
			//			uglify: {
			//				files: ['Gruntfile.js', 'src/js/**/*.js'],
			//				tasks: ['uglify']
			//			},
			jshint: {
				files: ['Gruntfile.js', 'src/js/**/*.js', 'index.html'],
				tasks: ['jshint']
			}
		}
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-gh-pages');

	// Aliases
	grunt.registerTask('build', ['jshint', 'compass', 'concat', 'copy']);
	grunt.registerTask('default', ['build', 'connect', 'watch']);
};
