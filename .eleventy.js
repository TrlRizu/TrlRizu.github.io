const eleventyGoogleFonts = require("eleventy-google-fonts");
const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const moment = require('moment');

moment.locale('en');


module.exports = (config) => {
    config.addPassthroughCopy('./src/images/');
    config.addTemplateFormats("scss");

    config.addPlugin(eleventyGoogleFonts);
    config.addPlugin(eleventySass);

    config.addFilter('dateIso', date => {   
        return moment(date).toISOString();
    });
    
    config.addFilter('dateReadable', date => {
        return moment(date).utc().format('ll');
    });

    config.addFilter('limit', function (arr, limit) {
        return arr.slice(0, limit);
    });

    config.addCollection('articulos', (collection) => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

	return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist',
        },
    };


};