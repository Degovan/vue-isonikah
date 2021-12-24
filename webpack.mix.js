// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
    .sass('src/assets/sass//main.scss','src/assets/css/');