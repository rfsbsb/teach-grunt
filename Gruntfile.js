module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.description %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        screwIE8: true,
      },
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'build/segundo.js': 'src/segundo.js',
          'build/terceiro.js': 'src/terceiro.js',
          'build/<%= pkg.name %>.js': 'src/<%= pkg.name %>.js'
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/<%= pkg.name %>.js'],
      options: {
        strict:false,
        node: true,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        esversion: 6,
        globals: {
          jQuery: true,
          module: true,
          console: true,
        },
      }
    },
    webpack: {
      curso: {
        entry: './build/<%= pkg.name %>.js',
        devtool: "source-map",
        preLoaders: [
          { test: /\.js$/, loader: "source-map-loader" },
        ],
        output: {
          path: './build/',
          filename: '<%= pkg.name %>.js'
        }
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-webpack');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'babel', 'webpack', 'uglify']);

};
