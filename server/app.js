const http = require('http');
const path = require("path");
const Router = require("./Router.js");
const hostname = '0.0.0.0';
const port = process.argv[2]||7001;
const dataPath = process.argv[3]||path.join(__dirname,'../reminds');
global.secretOrPrivateKey = 'jsonwebtoken';
global.dataPath = dataPath;
const server = http.createServer((req, res) => {
    router.switch(req,res);
}) 
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`)
})

const router = new Router(server);
router.addStatic('/remind/',path.join(__dirname,'../dist'));
router.addStatic('/reminds/',global.dataPath);
router.addStatic('/login/',path.join(__dirname,'./login'));

router.add('/remind-api/save',require('./Routes/save'),{
    method:"POST"
});
router.add('/remind-api/get',require('./Routes/read'),{
    method:"GET"
});
router.add('/remind-api/path',require('./Routes/path'),{
    method:"GET"
});
router.add('/remind-api/path',require('./Routes/path'),{
    method:"GET"
});
router.add('/remind-api/login',require('./Routes/login'),{
    method:"POST"
});