var api = require('../../api/api');

exports.generatorTwo = function(data, url) {
    return new Promise(function (res, rej) {
        if (data) {
            var number = {
                number: '89007006050'
            };
            // Заполним объект асинхронным запросом
            api.req(url).then(function (req) {
                Object.assign(data, number, req);
                res(data);
            });
        } else rej(data);
    })
};