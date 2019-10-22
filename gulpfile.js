'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.initialize(gulp);

// Run git init
// src is the root folder for git to initialize
gulp.task('init', function(){
    git.init(function (err) {
      if (err) throw err;
    });
  });
  