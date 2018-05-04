require.config({
    paths: {
        'jquery': './lib/jquery-1.7.2.min',
        'hand': './lib/handlebars-v4.0.11',
        'mk': './comment/mk'
    }
})
require(['mk'], function(mk) {
    mk.yk();
})