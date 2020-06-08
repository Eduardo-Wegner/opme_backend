'use strict';

module.exports = function (control) {
    app.route('/')
        .get((req, res) => {
                res.status(200).json("That's working, woorkiiiiing")
        })
    app.route('/api/users')
        .get((req, res) => {
            console.log(req.query.since)
            control.data_retrieve('/users?since=' + req.query.since).then(async (resp) => {
                res.status(200).json({ 'data': resp, next_link: '/api/users?since=' + (parseInt(req.query.count)+30)})
            })            
        })
    app.route('/api/users/:username/details')
        .get((req, res) => {
            console.log(req.params.username)
            control.data_retrieve('/users/'+req.params.username).then(async (resp) => {
                res.status(200).json(resp)
            })            
        })
    app.route('/api/users/:username/repos')
        .get((req, res) => {
            control.data_retrieve('/users/' + req.params.username +'/repos?page='+ req.query.count).then(async (resp) => {
                res.status(200).json(resp)
            })            
        })
    app.route('/api/limit')
        .get((req, res) => {
            control.data_retrieve('/rate_limit').then(async (resp) => {
                res.status(200).json(resp)
            })            
        })

    //Not Found
    app.use((req, res, next) => {
        res.status(404).send(req.url+" - PATH NOT FOUND")
    })
    //Any ERROR
    app.use((err, req, res, next) => {
        res.status(500).json({message:"OPS!!!! Something went wrong!!!", error:err})
    })
};