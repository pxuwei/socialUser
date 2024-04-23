const TOKEN_NAME = 'TOKEN'
export function SetToken(token){
    return uni.setStorageSync(TOKEN_NAME,token)
}
export function GetToken(token){
    return uni.getStorageSync(TOKEN_NAME)
}
export function RemoveToken(token){
    return uni.removeStorageSync(TOKEN_NAME)
}