AOS.init();







// var Jimp = require("jimp");//
//jimp library//
//https://www.npmjs.com/package/jimp?activeTab=readme//

var css = '@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,400,400italic,500,500italic,700,700italic,900,900italic&subset=latin,latin-ext,cyrillic,cyrillic-ext,greek-ext,greek,vietnamese);\
           @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300italic,400,400italic,700,700italic&subset=latin,latin-ext,cyrillic-ext,cyrillic,greek-ext,greek,vietnamese);\
           @import url(https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700&subset=latin,latin-ext,greek-ext,greek,vietnamese,cyrillic,cyrillic-ext);',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);


