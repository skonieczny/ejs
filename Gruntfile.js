module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sweetjs: {
      options: {
        readableNames: true,
        modules: ['./macros/macro_for.js']
      },
      test: {
      	expand: true,
      	cwd: 'tests/',
        src: ['*.js'],
        dest: 'output/'
      }
    },
    clean: ['output/*.js']
  });

  grunt.loadNpmTasks('grunt-sweet.js');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'sweetjs']);

};
