import request from '@/utils/request.ts';

// 添加面试
export let addSign = (params:any)=>{
  return request.get('http://baojia.chelun.com/v2-car-getMasterBrandList.html?_1563189832007');
}