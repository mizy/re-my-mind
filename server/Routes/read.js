const fs = require('fs');
const qs = require("qs");
const path = require("path")

module.exports = (req,res,router)=>{
    const {url} = req;
    const params = qs.parse(url.split('?')[1]);
    res.statusCode = 200;
    
    try{
        const data = fs.readFileSync(path.join(__dirname,'..',params.path||'reminds/test.remind'),{
            encoding:"utf-8"
        });

        res.setHeader("Content-Type",`charset=UTF-8`);
        res.end(JSON.stringify({
            success:true,
            data
        }))
    }catch(e){
        res.end(JSON.stringify({
            success:false,
            message:e.message
        }))
    };
    
}