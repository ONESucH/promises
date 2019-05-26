'use strict';
var child = require('./childTwo/childTwo');
var api = require('../api/api');

exports.childOne = function (url) {
    console.log('childOne load', url);
    return new Promise(function (res, rej) {
        if (url) {
            api.req(url).then(function (req) {
                console.log('Получили req', req);
                res(req);
                child.childTwo(req);
            })
        } else rej('child one err');
    })
};