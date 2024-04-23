import http from "@/utils/request.js";
console.log('requestrequestrequest',http);
export function GetSquare(data){
    return http.request({
        url: '/square',
        method: 'get',
        params: data
    })
}

export function PutCard(data){
    return http.request({
        url: '/PutCard',
        method: 'get',
        params: data
    })
}