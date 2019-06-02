const { exec } = require('../db/mysql')

//博客列表
const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if(author){
        sql += `and author='${author}'`
    } 
    if(keyword){
        sql += `and title like == '%${keyword}%'`
    }
    sql += `order by createTime desc;`
    return exec(sql)
}
//博客详情
const getDetail = (id) => {
    let sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

//新建博客
const newBlog = (blogData = {}) => {
    
    let { author, title, content } = blogData
    let sql = `insert into blogs (title, content, createTime, author) values ('${title}','${content}','2019/06/03 00:00:00','${author}')`

    return exec(sql).then(insertData => {
        console.log('insertData is', insertData)
        return {
            id:insertData.insertId
        }
    })
}

//更新博客
const updateBlog = (id, blogData = {}) => {
    // console.log('updateData ...',id, blogData)
    // return true
    const {title, content} = blogData
    const sql = `update blogs set title='${title}',content='${content}' where id='${id}'`
   
    return exec(sql).then( updateData => {
        if(updateData.affectedRows > 0){
            return true
        }
        return false
    })
}

//删除博客
const deleteBlog = (id, author) => {
    const sql = `delete  from blogs where id='${id}' and author='${author}'`
    return exec(sql).then( delData =>{
        if(delData.affectedRows > 0){
            return true
        }
        return false
    })
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}