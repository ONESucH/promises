'use strict';

exports.childTwo = function(responce) {
    console.log('childTwo load', responce);
    return new Promise(function (res, rej) {
        if (responce) {
            res(responce);
        } else rej('Данные не получены');
    })
};