'user strict'
const express = require('express'),
        dotenv = require('dotenv'),
        logger_load = require('./log');

class loaders{
    constructor(){        
        this._mongoose
        this.logger_start().then(()=>{
            schedule.schedule_event('log_rotate', this.logger_start, 'America/Sao_Paulo', '50 0 * * *').then(name => {
                schedule.start_event(name)
                logger.info(`#### ( ${name} ) LOG ROTATE Scheduled  ####\n`)
            })
        })
        
    }

    static factory(){
        return new loaders();
    }

    load_modules(){
        return new Promise((resolve, reject)=>{
            console.log('####  SERVER INITIALIZING  ####');
            logger.info('####  SERVER INITIALIZING  ####');
            logger.info('####  LOADING MODULES  ####\n');
            console.log('####  LOADING MODULES  ####\n');
            logger.info('####  LOADING ENVIRONMENT VARIABLES  ####');
            this.dot_env().then(() => {
                logger.info('####  ENVIRONMENT VARIABLES LOADED  ####');
                console.log('####  ENVIRONMENT VARIABLES LOADED  ####');
                logger.info('####  LOADING  EXPRESS ####');
                this.express_init().then(() => {
                    
                    console.log('#### EXPRESS LOADED ####');
                    logger.info('#### EXPRESS LOADED ####');
                    resolve();
                });
            });
        });
    }

    dot_env() {
        return new Promise((resolve, reject) => {
            dotenv.config();
            resolve();
        });
    }

    express_init() {
        return new Promise((resolve, reject) => {
             global.app = express()
            resolve();
        });
    }

    logger_start(){
        return new Promise((resolve, reject)=>{
            global.logger = logger_load.init();
            resolve()
        })
        
        
    }
}
module.exports = loaders.factory();