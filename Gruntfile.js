module.exports = function(grunt) {

  grunt.initConfig({
   
    watch: {
      files: ['**/*.less','*.html'],
      tasks: ['less','cssmin','htmlmin']
    },

    less: {
      developpement: {
       files: [
         {"assets/style.css": "less/style.less"}
       ],
      },
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets',
          src: ['*.css', '!*.min.css'],
          dest: 'assets',
          ext: '.min.css'
        }]
      }
    },

    htmlmin: {                                     // Task 
      dist: {                                      // Target 
        options: {                                 // Target options 
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{ 
          expand: true,
          src: '*.html',  
          dest: 'minify',
          ext: '.html'          
        }]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  

};