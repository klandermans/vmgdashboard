var bourbon = require('node-bourbon');

module.exports = function(grunt) {

   grunt.initConfig({
       sass: {
           options: {
               includePaths: bourbon.includePaths
           },
           dev: {
               files: {
                   'css/default.css': 'scss/default.scss',
                   'css/night.css' : 'night/night.scss'
               },
           },
           dist: {
               files: {
                   'css/default.css': 'scss/default.scss',
                   'css/default_en.css': 'scss/default_en.scss',
                   'css/default_nl.css' : 'scss/default_nl.scss',
                   'css/burda.css' : 'scss/burda.scss',
                   'css/publicitas.css' : 'scss/publicitas.scss',
                   'css/rootads.css' : 'scss/rootads.scss',
                   'css/videoflare.css' : 'scss/videoflare.scss',
                   'css/videoscale.css' : 'scss/videoscale.scss',
                   'css/vidmatic.css' : 'scss/vidmatic.scss',
                   'css/webisaba.css' : 'scss/webisaba.scss',
               }
           }
       },
       watch: {
           files: ['scss/**/*.scss', 'night/**/*.scss'],
           tasks: ['sass:dev']
       }
   });

   grunt.loadNpmTasks('grunt-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['watch']);
   grunt.registerTask('build', ['sass:dist']);

};
