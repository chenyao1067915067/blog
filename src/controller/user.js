const loginCheck = (username, password) => {
    if(username === "zhansan" && password === "123"){
        return true
    }
    return false
}

module.exports = {
    loginCheck
}