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
                    maxParallel: 100,
                    files: [{
                        parallel: true,
                        type: 'remote',
                        video: {
                            time: '65'
                        },
                        src: 'http://localhost:8080',
                        dest: 'index.gif',
                        delay: 5
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '720x562', '375x667', '320x480']
                }
            }
        }
    });

    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('default', ['pug', 'screenshot']);

};
