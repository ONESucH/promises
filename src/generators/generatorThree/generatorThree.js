exports.generatorThree = function(data) {
    return new Promise(function (res, rej) {
        if (data) {
            var city = {
                city: 'Moskov'
            };
            Object.assign(data, city);
            res(data);
        } else rej(data);
    })
};