exports.generatorOne = function(data) {
    return new Promise(function (res, rej) {
        if (data) {
            var user = {
                name: 'Name'
            };
            Object.assign(data, user);
            res(data);
        } else rej(data);
    })
};