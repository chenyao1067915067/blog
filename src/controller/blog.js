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

const getDetail = (id) => {
    return {
            id:2,
            title:"标题2",
            content:"内容2",
            createTime:1559359920028,
            author:"lisi"
    }
    
}
module.exports = {
    getList,
    getDetail
}