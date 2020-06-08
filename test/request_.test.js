const chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    expect = chai.expect(),
    cheerio = require('cheerio'),
    get_data = require('../services/get_data'),
    request = require('request'),
    customRequest = request.defaults({ headers: { 'User-Agent': 'opme_test' } }),
    loaders = require('../loaders/index.js');
global.schedule = require('../services/timers');
chai.use(chaiHttp);

describe('Request trending from github', ()=>{

    context('request github', () => {

       it("Testing 'get_data.request_url_data()'", (done) => {
           get_data.request_url_data('/users?since=0').then((result) => {
                customRequest('https://api.github.com/users?since=0', async (error, response, data) => {
                    console.log(result)
                    console.log(JSON.parse(data))
                    result.should.to.deep.equal(JSON.parse(data));
                    done();
                })
            })
        })
    })
})
