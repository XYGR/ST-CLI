// 封装请求

const get = async (url,params = {}) =>{

    try{
        let result = await Taro.request({url,data:params,method:'GET'});
    }catch (e) {

    }
}

const post = async (url,params = {}) =>{
    let result = await Taro.request({url,data:params,method:'POST'});
}
