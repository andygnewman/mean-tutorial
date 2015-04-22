module.exports = function(config) {
  config.set({

    autoWatch : true,

    basePath : '../',

    frameworks: ['jasmine'],

    files: [
      'test/unit/**/*.js'
    ],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ]
  });
};
