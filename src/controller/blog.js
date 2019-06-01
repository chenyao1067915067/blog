//博客列表
const getList = (author, keyword) => {
    return [
        {
            id:1,
            title:"标题A",
            content:"内容1",
            createTime:1559359877359,
            author:"zahngsan"
        },
        {
            id:2,
            title:"标题2",
            content:"内容2",
            createTime:1559359920028,
            author:"lisi"
        }
    ]
}
//博客详情
const getDetail = (id) => {
    return {
            id:2,
            title:"标题2",
            content:"内容2",
            createTime:1559359920028,
            author:"lisi"
    }   
}

//新建博客
const newBlog = (blogData = {}) => {
    console.log("blogData ..." +blogData)
    return {
        id:3 //表示新建博客插入到数据库的id
    }
}

//更新博客
const updateBlog = (id, blogData = {}) => {
    console.log('updateData ...',id, blogData)
    return true
}

//删除博客
const deleteBlog = (id) => {
    console.log('deleteData ...',id)
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}