module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: '**/*.scss',
            tasks: ['sass']
        },

        sass: {
          dev: {
              files: {
                  'src/css/style.css': 'sass/index.scss'
              }
          }
        },

        postcss: {
          options: {
              map: true,
              processors: [
                    require('pixrem')(),
                    require('autoprefixer')({browsers: 'last 2 versions'})
              ]
          },
          dist: {
              src: 'dist/css/*.css'
          }
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'src/css/',
              src: ['*.css', '!*.min.css'],
              dest: 'dist/css',
              ext: '.css'
            }]
          }
        },


       htmlmin: {
            dist: {
              options: {
                  collapseBooleanAttributes: true,
                  collapseWhitespace: true,
                  conservativeCollapse: true,
                  decodeEntities: false,
                  minifyCSS: {
                    compatibility: 'ie8',
                    keepSpecialComments: 0
                  },
                  minifyJS: true,
                  minifyURLs: false,
                  processConditionalComments: true,
                  removeAttributeQuotes: true,
                  removeComments: true,
                  removeOptionalAttributes: false,
                  removeOptionalTags: false,
                  removeRedundantAttributes: true,
                  removeScriptTypeAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  removeTagWhitespace: false,
                  sortAttributes: true,
                  sortClassName: false
                },

              files: {
                'dist/index.html': 'src/index.html'
              }
            }
          },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'src/css/*.css',
                        'src/*.html',
                        'src/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './src'
                }
            }
        },

        copy: {
          main: {
            files: [
              {
                expand: true,
                cwd: 'src/',
                src: '**',
                dest: 'dist/',
                flatten: false,
              }
            ],
          },
        },


    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('dist', ['copy','htmlmin', 'cssmin','postcss:dist']);
    grunt.registerTask('default', ['browserSync', 'watch']);

};