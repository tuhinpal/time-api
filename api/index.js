const request = require('request');
const moment = require('moment');

module.exports = async(req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://time.akamai.com/'
    };
    request(options, function(error, response) {
        if (error) {
            res.json({ result: 'false' });
        } else {
            var unix = Number(response.body) + Number('19800');
            var timem = moment.unix(unix);
            res.json({
                timezone: 'Asia/Kolkata',
                unixtime: unix,
                date: timem.format('L'),
                time: timem.format('LTS'),
                day: timem.format('dddd')
            });
        };
    });
}