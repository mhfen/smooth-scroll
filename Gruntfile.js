module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    util: {
      separator: grunt.util.linefeed
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['src/scripts/*.js'],
        tasks: ['uglify']
      }
    },

    uglify: {
      options: {
        banner: '/* ========================================================================' + '<%= util.separator %>' +
                '* smooth-scroll.js v'+'<%= pkg.version %>' + '<%= util.separator %>' +
                '* https://github.com/mhfen/smooth-scroll.git' + '<%= util.separator %>' +
                '* ========================================================================' + '<%= util.separator %>' +
                '* Copyright 2014 Matt Fender' + '<%= util.separator %>' +
                '* License: (https://github.com/mhfen/smooth-scroll/blob/master/LICENSE)' + '<%= util.separator %>' +
                '* ======================================================================== */' + '<%= util.separator %>',
        sequences: false
      },
      js: {
        src: 'src/scripts/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', [
    'uglify'
  ]);

};