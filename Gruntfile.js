var githubMetrics = require('github-metrics');
var fs = require('fs');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        pug: {
            compile: {
                options: {
                    data: {
                        githubTable: fs.readFileSync('github-metrics.html')
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

    grunt.registerTask('github-metrics', function() {
        var GITHUB_TOKEN = process.env.GITHUB_TOKEN;
        var done = this.async();

        githubMetrics({
            user: 'gabrielcsapo',
            token: GITHUB_TOKEN,
            keys: ['full_name', 'description', 'commits', 'health', 'html_url', 'days_stagnant'],
            sort: 'days_stagnant',
            sortAsc: true
        }, function(err, result) {
            if(err) throw err;

            var keys = [];
            var values = [];

            result.forEach(function(o, i){
              values[i] = [];
              Object.keys(o).forEach(function(k) {
                if(k !== 'full_name') {
                    if(keys.indexOf(k) <= -1) { keys.push(k) }
                    values[i].push(JSON.stringify(o[k]));
                }
              });
            });

            fs.writeFileSync('github-metrics.html', `
              <table class="table responsive" style="text-align:left;">
                  <thead>
                    ${keys.map(function(k) {
                      return (`<th>${k}</th>`);
                    }).join('')}
                  </thead>
                  <tbody>
                    ${values.map((v) => {
                      return (`
                        <tr>
                          ${v.map(function(r) {
                            if(r.indexOf('http') > -1) {
                                return (`<td><a href=${r}>${r}</a></td>`);
                            } else {
                                return (`<td>${r}</td>`);
                            }
                          }).join('')}
                        </tr>
                      `);
                    }).join('')}
                  </tbody>
              </table>
            `);
            done();
        });
    });

    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('server', ['connect:keepalive']);
    grunt.registerTask('build', ['connect:server', 'pug', 'screenshot'])
    grunt.registerTask('default', ['build']);

};
