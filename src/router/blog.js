const { getList, getDetail } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method  //GET POST
    
    //获取博客列表
    if(method === "GET" && req.path === "/api/blog/list"){
        // return {
        //     msg:"这是博客列表接口"
        // }
       const author = req.query.author || ''
       const keyword = req.query.keyword || ''
       const listDate = getList(author, keyword)
       return new SuccessModel(listDate)
    }

    //获取博客详情
    if(method === "GET" && req.path === "/api/blog/detail"){
        // return {
        //     msg:"这是博客详情接口"
        // }
        const id = req.query.id
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
    }

    //新建一篇博客
    if(method === "POST" && req.path === "/api/blog/new"){
        return {
            msg:"这是一个新建博客接口"
        }
    }

    //更新一篇博客
    if(method === "POST" && req.path === "/api/blog/update"){
        return {
            msg :"这是一个更新博客接口"
        }
    }

    //删除博客接口
    if(method === "POST" && req.path === "/api/blog/del"){
        return {
            msg: "这是一个删除博客的接口"
        }
    }
}

module.exports = handleBlogRouter