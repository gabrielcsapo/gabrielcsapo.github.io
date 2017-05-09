module.exports = (grunt) => {
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        pug: {
            compile: {
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
                files: ['public/*.pug', 'public/css/*.css', 'public/index.js'],
                tasks: ['pug'],
                options: {
                    spawn: true,
                }
            }
        },
        screenshot: {
            index: {
                options: {
                    path: './screenshots',
                    maxParallel: 5,
                    files: [{
                        parallel: true,
                        type: 'remote',
                        src: 'http://localhost:8000',
                        dest: 'index.png',
                        delay: 0
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '720x562', '375x667', '320x480']
                }
            }
        }
    });

    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('server', ['connect:keepalive']);
    grunt.registerTask('build', ['connect:server', 'pug', 'screenshot'])
    grunt.registerTask('default', ['build']);

};
