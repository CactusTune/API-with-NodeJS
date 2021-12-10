const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))

const route = require('./router');

app.use('/api', route);

PORT = 3000;

app.get('/', (req,res)=>{
    res.send('API for Musa')
})

app.listen(PORT, ()=>{
    console.log(`Server running on http:/loacalhost:${PORT}`)
})


