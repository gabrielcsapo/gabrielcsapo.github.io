module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    'index.html': ['public/index.pug']
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.pug', '**/*.css', '**/*.js'],
                tasks: ['pug'],
                options: {
                    spawn: false,
                }
            }
        },
        screenshot: {
            index: {
                options: {
                    path: './screenshots/index',
                    files: [{
                        compress: true,
                        parallel: true,
                        type: 'local',
                        path: '.',
                        port: 8000,
                        src: "index.html",
                        dest: "index.png",
                        delay: 300
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '720x562', '375x667', '320x480']
                }
            }
        }
    });

    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('default', ['pug', 'screenshot']);

};
