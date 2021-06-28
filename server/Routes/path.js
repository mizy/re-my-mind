const fs = require('fs');
const qs = require("qs");
const path = require("path")

module.exports = async (req,res)=>{
    const {url} = req;
    const params = qs.parse(url.split('?')[1]);
    res.statusCode = 200;
    try{
        const filePath = path.resolve(global.dataPath,params.path);
        const files = fs.opendirSync(filePath);
        const data = [];
        for await(const each of files){
            data.push({
                type:each.isDirectory()?'folder':'file',
                ...each
            })
        }
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