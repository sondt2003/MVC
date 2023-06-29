require('dotenv').config()
const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const compression=require('compression');

const app=express();
app.use(morgan('dev'))
app.use(helmet())
app.use(compression());
require('./dbs/init.mongoose');
const {checkOverload}=require('./helpers/check_connect');
checkOverload();

app.use('/',require('./routers/'))
module.exports=app;