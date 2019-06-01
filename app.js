const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = (req,res) => {
    //设置返回格式
    res.setHeader('Content-type', "application/json")

    //获取url
    const url = req.url
    req.path = url.split('?')[0]

    //解析query
    req.query = querystring.parse(url.split("?")[1])

    //处理blog路由
    const blogData = handleBlogRouter(req, res)
    

    //处理blog路由
    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    const userData = handleUserRouter(req, res)
    //处理user路由
    if(userData){
        res.end(
            JSON.stringify(userData)
        )
        return 
    }

    //未命中路由，返回404
    res.writeHead(404,{"Content-type":"text/plain"})
    res.write("404 NOT Found\n")
    res.end()

    console.log("服务器已启动")
}

module.exports = serverHandle


// env:process.env.NODE_ENV
