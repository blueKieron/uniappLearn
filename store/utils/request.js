const BASEURL = 'https://api-hmugo-web.itheima.net/api/public/v1'

export const request = options => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASEURL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: res => {
        // console.log(res)
        if(res.data.meta.status !== 200) {
          return uni.showToast({
            title: '获取数据失败'
          })
        }
        resolve(res.data)
      },
      fail: err => {
        uni.showToast({
          title: '获取数据失败'
        })
        reject(err)
      }
    })
  })
}