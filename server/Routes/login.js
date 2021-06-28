const path = require("path")
const password = process.argv[4];
const jwt = require('jsonwebtoken');
const save = async (req,res)=>{
    let body = ''; 
    req.setEncoding('utf8');
    req.on("data",chunk=>{
        body+=chunk;
    })
    req.on('end', () => {
        try {
          // 响应信息给用户。
          res.statusCode = 301;
          const params = JSON.parse(body);
          if(password===params.password){
            const token = jwt.sign(params.name, global.secretOrPrivateKey, {
                expiresIn: 60*60*24*30  // 1小时过期
            });
            res.writeHead(200, {
                'Set-Cookie': `token=${token}`,
            });
          }
          
          res.end(JSON.stringify({
              success:true,
              message:"保存成功"
          }))
        } catch (er) {
          // json 解析失败。
          res.statusCode = 400;
          return res.end(JSON.stringify({
            success:false,
            message:`错误: ${er.message}`
          }));
        }
      });
   
}
module.exports = save;