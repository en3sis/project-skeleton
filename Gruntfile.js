module.exports = function (grunt) {
    grunt.initConfig({
        /* =================================
        =  WATCH Task
        ================================= */
        watch: {
            files: '**/*.scss',
            tasks: ['sass']
        },

        /* =================================
        =  SASS Task
        ================================= */
        sass: {
          dev: {
              files: {
                  'src/css/style.css': 'sass/style.scss'
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

        /* =================================
        =  CSS MIN Task
        ================================= */
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

        /* =================================
        =  HTML MIN Task
        ================================= */
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
                // Dictionary of files
                // 'destination': 'source'
              }
            }
          },

        /* =================================
        =  BrowserSync Task
        ================================= */
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
        }
    });

    /* =================================
    =  GRUNT NPM TAKS
    ================================= */
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-postcss');


    /* =================================
    =  Register Task
    ================================= */
    grunt.registerTask('dist', ['htmlmin', 'cssmin','postcss:dist']);
    grunt.registerTask('default', ['browserSync', 'watch']);

};