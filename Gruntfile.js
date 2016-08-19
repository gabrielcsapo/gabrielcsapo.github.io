module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');

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
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*'
                }
            },
            keepalive: {
                options: {
                    keepalive: true,
                    port: 8000,
                    hostname: '*'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.pug', '**/*.css', '**/*.js'],
                tasks: ['pug'],
                options: {
                    spawn: true,
                }
            }
        },
        screenshot: {
            index: {
                options: {
                    path: './screenshots/index',
                    maxParallel: 100,
                    files: [{
                        parallel: true,
                        type: 'remote',
                        video: {
                            time: '65'
                        },
                        src: 'http://localhost:8000',
                        dest: 'index.gif',
                        delay: 5
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '720x562', '375x667', '320x480']
                }
            }
        }
    });

    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('server', ['connect:keepalive'])
    grunt.registerTask('default', ['connect', 'pug', 'screenshot']);

};
