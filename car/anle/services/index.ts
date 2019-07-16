import request from '../utils/request'
//获取首页数据
export function homePageList() {
  return request({
    url: "/v2-car-getMasterBrandList.html",
    method: "GET",
    params: {
      _1563178933183: ""
    }
  });
}


// 获取首页数据
export function getBrandListData(params:any){
    return request({
        url: 'v2-car-getMasterBrandList.html?_1563176110194',
        method: 'get'
    })
}