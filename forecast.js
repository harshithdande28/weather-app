import request from "postman-request";
const rgc = (lat,lon,callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&'+'lon='+lon+'&appid=YOUR API-KEY GOES HERE'
request({url,json: true},(error,response)=>{ 
    if(error){
        callback('Unable to connect!',undefined)
    }else if(response.body.error || response.body.cod === '200'){ 
        callback('Unable to find location!',undefined)
    }
    else{
        callback(undefined,{
            name:response.body.name, 
            main:response.body.main, 
            country: response.body.sys.country 
        })
    }
})}
export default{
    rgc
}
