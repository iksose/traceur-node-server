"use strict";
"use strict";
module.exports = function(grunt) {
  grunt.initConfig({traceur: {
      options: {
        sourceMaps: 'file',
        generators: 'parse',
        numericLiterals: 'parse',
        modules: 'commonjs'
      },
      custom: {files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'lib/'
        }]}
    }});
  grunt.loadNpmTasks('grunt-traceur');
  grunt.registerTask('default', ['traceur']);
};
//# sourceURL=lib/Gruntfile.js