let express = require('express');

const app = express();

const port = 8080;
let router = require('./Course-management-App/routes/route');
app.use(router);


app.listen(port, ()=>{
    console.log('app is litening at 8080 port');
});