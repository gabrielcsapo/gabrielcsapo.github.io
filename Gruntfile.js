module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screenshot');

    grunt.initConfig({
        screenshot: {
            site: {
                options: {
                    path: './screenshots',
                    files: [{
                        type: 'remote',
                        src: "http://localhost:3000",
                        dest: "main.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080','1024x768','640x960','320x480']
                }
            }
        }
    });

    grunt.registerTask('default', ['screenshot']);

};
