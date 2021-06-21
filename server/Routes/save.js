const fs = require("fs");
const path = require("path")

const save = async (req,res)=>{
    let body = ''; 
    req.setEncoding('utf8');
    req.on("data",chunk=>{
        body+=chunk;
    })
    req.on('end', () => {
        try {
          // 响应信息给用户。
          res.statusCode = 200;
          const params = JSON.parse(body);
          if(!params.path){
              return res.end(JSON.stringify({
                  success:false,
                  message:"请选择合法路径"
              }))
          }
          fs.writeFileSync(path.resolve(__dirname,'../',params.path),params.data)
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