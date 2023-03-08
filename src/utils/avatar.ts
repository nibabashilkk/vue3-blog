function getQQAvatar (qq:String) {
    const qqNum = qq.replace(/@qq.com/ig, '')
    return `https://thirdqq.qlogo.cn/g?b=sdk&nk=${qqNum}&s=140`
}
export{
    getQQAvatar
}