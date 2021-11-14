const mix = require('laravel-mix');

mix
    .js('resources/vue/app.ts', 'public/js/vue/app.js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
    ])
    .version();
