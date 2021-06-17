const save = async (req,res)=>{
    res.statusCode = 200;
    res.end(JSON.stringify({
        success:true,
        message:"保存成功"
    }))
}
module.exports = save;