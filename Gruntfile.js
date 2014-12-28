module.exports = function(grunt) {
    grunt.initConfig({
        traceur: {
            options: {
                sourceMaps: 'file',
                generators: 'parse',
                numericLiterals: 'parse',
                modules: 'commonjs',
                experimental: true
            },
            custom: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: 'lib/'
                }]
            },
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['traceur'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
