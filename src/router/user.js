const { loginCheck }  = require('../controller/user')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const handleUserRouter = (req, res) => {
    const method = req.method
   
    //登录
    if (method === "POST" && req.path === "/api/user/login") {
        // return {
        //     msg: "这是一个登录接口"
        // }
        const {username, password} = req.body
        const result = loginCheck(username, password)
        return result.then(data => {
            if(data){
                return new SuccessModel('登录成功')
            }
            else{
                return new ErrorModel('登录失败')
            }
        })
        // if(result) {
        //     return new SuccessModel('登录成功')
        // }
        // return new ErrorModel('登录失败')
    }
}

module.exports = handleUserRouter