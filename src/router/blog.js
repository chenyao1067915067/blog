const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method  //GET POST
    const id = req.query.id
    //获取博客列表
    if(method === "GET" && req.path === "/api/blog/list"){
       const author = req.query.author || ''
       const keyword = req.query.keyword || ''
    //    const listDate = getList(author, keyword)
    //    return new SuccessModel(listDate)
        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    //获取博客详情
    if(method === "GET" && req.path === "/api/blog/detail"){
        // const detailData = getDetail(id)
        // return new SuccessModel(detailData)
        const result = getDetail(id)
        return result.then(detailData => {
            return new SuccessModel(detailData)
        })
    }

    //新建一篇博客
    if(method === "POST" && req.path === "/api/blog/new"){
       
    //    const data = newBlog(req.body)
    //    return new SuccessModel(data)
        const result = newBlog(req.body)
        return result.then( insertData => {
            return new SuccessModel(insertData)
        })
    }

    //更新一篇博客
    if(method === "POST" && req.path === "/api/blog/update"){
        const result = updateBlog(id, req.body)
       
        return result.then(val => {
            if(val){
                return new SuccessModel()
            }
            else{
                return new ErrorModel('更新博客失败')
            }
        })
    
    }

    //删除博客接口
    if(method === "POST" && req.path === "/api/blog/del"){
        const author = '张三' //假数据
        const result = deleteBlog(id,author)
        return result.then( data => {
            if(data){
                return new SuccessModel()
            }
            else{
                return ErrorModel('删除失败')
            }
        })
    }
}

module.exports = handleBlogRouter