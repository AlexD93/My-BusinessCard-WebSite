module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.loadNpmTasks("grunt-newer");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-compass");

    grunt.registerTask("default", [
        "compass",
        "postcss",
        "cssmin",
        "watch"
    ]);

    grunt.initConfig({
        compass: {
            source: {
                options: {
                    sassDir: "source/scss",
                    cssDir: "src/css",
                    specify: "source/scss/frontend.scss",
                    imagesDir: "img"
                }
            }
        },

        cssmin: {
            all: {
                files: [
                    {
                        dest: "src/css/frontend.min.css",
                        src: "src/css/frontend.css"
                    }
                ]
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require("autoprefixer")({
                        browsers: ["last 5 versions"]
                    })
                ]
            },
            all: {
                files: [
                    {
                        dest: "src/css/frontend.css",
                        src: "src/css/frontend.css"
                    }
                ]
            }
        },

        watch: {
            css: {
                files: [
                    "source/scss/**/*.scss"
                ],
                tasks: [
                    "compass",
                    "postcss",
                    "cssmin"
                ],
                options: {
                    livereload: 35777,
                }
            }
        }
    });
};