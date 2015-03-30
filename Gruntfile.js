'use strict';
module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: ['Gruntfile.js']
      },
      js: {
        src: ['*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    mochacli: {
      options: {
        reporter: 'spec',
        bail: true
      },
      all: ['test/*.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      js: {
        files: '<%= jshint.js.src %>',
        tasks: ['jshint:js', 'mochacli']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'mochacli']
      }
    },
    browserify: {
      dist: {
        files: {
          '<%= pkg.name %>.js': ['index.js']
        },
        options: {
          browserifyOptions: {
            standalone: '<%= pkg.name %>'
          }
        }
      }
    },
    uglify: {
      client: {
        files: {
          '<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
        }
      }
    },
    usebanner: {
      options: {
        position: 'top',
        banner: [
          '/*',
          ' *   <%= pkg.name %> - v<%= pkg.version %>',
          ' *   <%= pkg.description %>',
          ' *   <%= pkg.homepage %>',
          ' *   by <%= pkg.author.name %> <<%= pkg.author.email %>>',
          ' *   <%= pkg.license %> License',
          ' */\n'
          ].join('\n'),
        linebreak: true
      },
      files: {
        src: ['<%= pkg.name %>.js', '<%= pkg.name %>.min.js']
      }
    },
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: ['pkg'],
        commitFiles: ['package.json', 'bower.json', '<%= pkg.name %>.js', '<%= pkg.name %>.min.js'],
        pushTo: 'origin'
      }
    },
    shell: {
      publish: {
        command: "npm publish"
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'mochacli']);

  grunt.registerTask('client', ['browserify', 'uglify', 'usebanner']);

  grunt.registerTask("release", "Release a new version, push it and publish it", function (target) {
    var target = target ? target : "patch";
    grunt.task.run("bump-only:" + target, "client", "bump-commit", "shell:publish");
  });

};
