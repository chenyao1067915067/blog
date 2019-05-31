const serverHandle = (req,res) => {
    //设置返回格式
    res.setHeader('Content-type', "application/json")

    const resData  = {
        name:'hello100',
        site:'yao',
        env:process.env.NODE_ENV
    }

    res.end(
        JSON.stringify(resData)
    )
    console.log("服务器已启动")
}

module.exports = serverHandle