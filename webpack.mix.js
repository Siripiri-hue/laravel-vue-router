const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/admin.js', 'public/js')
    .sass('resources/sass/admin.scss', 'public/css');
// aggiungere qui file assets creati per compilarli
mix.js('resources/js/front.js', 'public/js')
    .sass('resources/sass/front.scss', 'public/css');

// una volta aggiunti e fatta la divisione front/backoffice, si può cambiare nome ad app.js/app.scss
// ricordarsi poi di cambiarli anche in layouts.app e aggiungere i nuovi nella nuova vista che sfrutta i file front
