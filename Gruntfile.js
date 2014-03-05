module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['src/scripts/*.js'],
        tasks: ['uglify']
      }
    },

    uglify: {
      options: {
        banner: '/* <%= pkg.name %> - <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> EST */\n',
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