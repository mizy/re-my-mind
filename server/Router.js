const fs = require('fs');
const path = require("path");
const etag = require("etag");
const mime  = require("mime-types")

class Router {
    constructor(server){
        this.server = server;
        this.routes = [];
        this.staticMap = {}
    }

    switch(req,res){
        const{url} =req;
        const arr = url.split('?');
        const path = arr[0];
        this.path = path;
        // 是否匹配静态路由
        if(req.method==='GET'&&this.findStaticRoute(path,res)){
            return true;
        }
        const route = this.findRoute(path,req.method);
        if(route){
            route.handle(req,res,this);
        }else{
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain')
            res.end('404')
        }
    }
    
    findRoute(path,method){
        const route = this.routes.find(route=>(route.path === path && route.method===method));
        return route
    }

    add(path,handle,option){
        this.routes.push({
            path,
            method:"GET",
            handle,
            ...option
        });
    }

    // 寻找静态路由
    findStaticRoute(enter,res){
        let flag = false;
        for(let key in this.staticMap){
            if(enter.indexOf(key)>-1||`${enter}/`===key){
                const dir = this.staticMap[key];
                let filePath = enter.replace(key,'');
                if(!filePath||filePath==='/'||filePath==='\\'||enter.length<key.length){
                    filePath = 'index.html'
                }
                const file = path.join(dir,filePath);
                try{
                    const stats = fs.statSync(file);
                    res.setHeader('ETag', etag(stats))
                    res.setHeader("Last-Modified",stats.mtime.toGMTString());
                }catch(e){
                    console.log(e)
                    continue;
                }
                const mimeType = mime.lookup(filePath);

                res.setHeader("Content-Type",`${mimeType}; charset=UTF-8`);
                res.setHeader("Cache-Control",'public,max-age=86400');
                const stream = fs.createReadStream(file);
                stream.pipe(res);
                flag =  true;
                break;
            }
        }
        return flag;
    }

    addStatic(path,dir){
        this.staticMap[path] = dir;
    }
}
module.exports = Router;