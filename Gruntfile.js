module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

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
        watch: {
            scripts: {
                files: ['**/*.jade'],
                tasks: ['pug'],
                options: {
                    spawn: false,
                }
            }
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3
                },
                files: {
                    'public/assets/background.png': 'public/assets/background-raw.png',
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        },
        screenshot: {
            index: {
                options: {
                    path: './screenshots/index',
                    files: [{
                        type: 'local',
                        path: '.',
                        port: 8000,
                        src: "index.html",
                        dest: "index.png",
                        delay: 300
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '320x480']
                }
            }
        }
    });

    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('default', ['pug', 'screenshot']);

};
