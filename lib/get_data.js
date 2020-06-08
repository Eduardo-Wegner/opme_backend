'use strict'
const cheerio = require('cheerio'),
    request = require('request'),
    moment = require('moment'),
    moment_tz = require('moment-timezone');
class get_data{
    constructor(){
        this._github = 'https://api.github.com/users'
    }

    static factory(){
        return new get_data();
    }

    request_url_data(count){
        return new Promise((resolve, reject)=>{
            request(this._github+url, (error, response, data)=>{
                let html = cheerio.load(data);
                
                
                resolve(html)
            })           
        })
    }

}
module.exports = get_data.factory();