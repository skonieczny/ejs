module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sweetjs: {
      options: {
        readableNames: true,
        modules: ['./macros/macro_for.js']
      },
      test: {
        src: 'tests/*.js',
        dest: 'output/'
      }
    }
    clean: 'output/'
  });

  grunt.loadNpmTasks('grunt-sweet.js');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'sweetjs']);

};
