module.exports = (url, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `http://locally.uieee.com/${url}`,
            data: data,
            success: resolve,
            fail: reject
        })
    })
}