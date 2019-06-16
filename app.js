const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const {set, get } = require('./src/db/redis')
const handleUserRouter = require('./src/router/user')

//处理postData
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if(req.method !== "POST"){
            resolve({})
            return
        }
        if(req.headers['content-type'] !== 'application/json'){
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            if(!postData){
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })

    return promise
}
const serverHandle = (req,res) => {
    //设置返回格式
    res.setHeader('Content-type', "application/json")

    //获取url
    const url = req.url
    req.path = url.split('?')[0]

    //解析query
    req.query = querystring.parse(url.split("?")[1])

    // let needSessionCookie = false
    // let userId = req.cookie.userid
    // if (!userId) {
    //     needSessionCookie = true

    // }

    //处理postData
    getPostData(req).then(postData => {

        req.body = postData
        //处理blog路由
        const blogResult = handleBlogRouter(req, res)
        if(blogResult){
            blogResult.then(data => {
                res.end(
                    JSON.stringify(data)
                )
            })
            return
        }
    
        const userResult = handleUserRouter(req, res)

        if(userResult){
            userResult.then( data => {
                res.end(
                    JSON.stringify(data)
                )
            })
            return
        }
       

         //未命中路由，返回404
        res.writeHead(404,{"Content-type":"text/plain"})
        res.write("404 NOT Found\n")
        res.end()
    })

   

    console.log("服务器已启动")
}

module.exports = serverHandle


// env:process.env.NODE_ENV
