const get_data = require('../services/get_data');
class data_controller{
    constructor(url, model){
        this._url = url;
    }

    data_retrieve(request){
        return new Promise((resolve, reject) => {
            console.log('AQUI')
            get_data.request_url_data(request).then(async(resp)=>{
                resolve(resp)
            })
            
        })
    }
    
}

module.exports = data_controller