const fs = require('fs');
const qs = require("qs");

module.exports = (req,res,router)=>{
    const path = router.path;
    const data = fs.readFileSync(path)
}