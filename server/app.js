const http = require('http');
const path = require("path");
const Router = require("./Router.js");
const hostname = '0.0.0.0';
const port = 7001;
const server = http.createServer((req, res) => {
    router.switch(req,res);
})
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`)
})

const router = new Router(server);
router.addStatic('/remind/',path.join(__dirname,'../dist'));

router.add('/remind-api/save',require('./Routes/save'),{
    method:"POST"
});
router.add('/remind-api/get',require('./Routes/read'),{
    method:"GET"
});
router.add('/remind-api/path',require('./Routes/path'),{
    method:"GET"
});