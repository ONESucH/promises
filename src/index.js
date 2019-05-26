'use strict';
var child = require('./childOne/childOne');

(function () {
    var url = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo';

    child.childOne(url).then(function (result) {
        console.log('result', result);
    });
}());