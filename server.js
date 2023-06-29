const app = require('./src/app');
require('dotenv').config()

const PORT = process.env.PORT;
const server =app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`);
})
process.on('SIGINT',()=>{
    server.close(()=>{
        console.log('closed');
    });
})