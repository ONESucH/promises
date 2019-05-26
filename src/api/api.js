exports.req = function (url) {
    return new Promise(function (res, rej) {
        fetch(url)
            .then(function (res) { return res.json() })
            .then(function (req) { res(req) })
            .catch(function (err) { rej(err) })
    })
};