const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;
const countConnect = () => {
    const numConnect = mongoose.connections.length;
    return numConnect;
}
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus.length;
        const memoryUsage = process.memoryUsage().rss;
        //mỗi cores chịu được 5 connect
        const maxConnectons = numCores * 5;
        console.log(`Active connections: ${numConnection} MB`);
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);
        if (numConnection > maxConnectons) {
            console.log('Connection overload detected');
        } else if (numConnection > (maxConnectons * 0.9)){
            console.log('warning about to overload detected');p
        }
    }, _SECONDS)//monitor every 5 seconds
}
module.exports = { countConnect, checkOverload };
