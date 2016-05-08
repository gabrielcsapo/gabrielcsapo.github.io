module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-pug');

    grunt.initConfig({
        pug: {
          compile: {
            options: {
              data: {
                debug: false
              }
            },
            files: {
              'index.html': ['public/index.jade']
            }
          }
      },
        screenshot: {
            site: {
                options: {
                    path: './screenshots',
                    files: [{
                        type: 'local',
                        path: '.',
                        port: 8000,
                        src: "index.html",
                        dest: "main.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080','1024x768','640x960','320x480']
                }
            }
        }
    });

    grunt.registerTask('default', ['pug', 'screenshot']);

};
