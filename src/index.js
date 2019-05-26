'use strict';
var child = require('./childOne/childOne'),
    generatorOneUrl = require('./generators/generatorOne/generatorOne'),
    generatorTwoUrl = require('./generators/generatorTwo/generatorTwo'),
    generatorThreeUrl = require('./generators/generatorThree/generatorThree');

(function () {
    var url = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo',
        windowExample = {
            example: 'example'
        };

    child.childOne(url).then(function (result) {
        console.log('result', result);
    });

    // Пример с генераторами
    generatorOneUrl.generatorOne(windowExample).then(function (res) {
        console.log('Результат generatorOne', res);
    });

    // асинхронный пример
    generatorTwoUrl.generatorTwo(windowExample, url).then(function (res) {
        console.log('Результат generatorTwo', res);
    });

    generatorThreeUrl.generatorThree(windowExample).then(function (res) {
        console.log('Результат generatorThree', res);
    });
}());