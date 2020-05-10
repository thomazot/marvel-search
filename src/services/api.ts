import axios from 'axios'
import md5 from 'md5'
const apikey = '56ee2809b52f11c54ba587e29d6049ae'
const privateKey = 'a5a89a518ee84751933e13251d0ded4052b66047'
const ts = '1'
const hash = md5(ts+privateKey+apikey)
const params = {
    ts,
    apikey,
    hash
}
const Api = axios.create()

Api.interceptors.request.use(config => {

    config.params = {
        ...params,
        ...config.params
    }
    return config
})

export default Api