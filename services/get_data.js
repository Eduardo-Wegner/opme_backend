'use strict'
const cheerio = require('cheerio'),
    request = require('request'),
    customRequest = request.defaults({headers: { 'User-Agent': 'opme' }}),
    moment = require('moment'),
    moment_tz = require('moment-timezone');
class get_data {
    constructor() {
        this._github = 'https://api.github.com'
    }

    static factory() {
        return new get_data();
    }

    request_url_data(url) {
        return new Promise((resolve, reject) => {
            console.log(this._github + url)
            customRequest(this._github + url, (error, response, data) => {
                resolve(JSON.parse(data))
            })
        })
    }

}
module.exports = get_data.factory();