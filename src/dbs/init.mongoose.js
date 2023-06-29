const mongodb = require('mongoose');
const {db:{host,port,name}}=require('../config/config.mongdb');
const url = `mongodb://${host}:${port}/${name}`;
const { countConnect } = require('../helpers/check_connect')
class Database {
    constructor() {
        this.connect();
    }
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongodb.set('debug', true);
            mongodb.set('debug', { color: true });
        }
        mongodb.connect(url,{
            maxPoolSize:50
        }).then(_ => {
            console.log('Connected successfully')
        }).catch((err) => {
            console.log('Error connecting'+err);
        });
    }
    static GetInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        countConnect();
        return Database.instance;
    }
}
const Instance = Database.GetInstance();
module.exports = Instance;