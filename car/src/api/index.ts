import request from '@/utils/request.ts';

// 首页list
export let addSign = (params:any)=>{
  return request.get('http://baojia.chelun.com/v2-car-getMasterBrandList.html?_1563237651079');
}

//右侧车辆list
export let getContent = (params:any)=>{
  return request.get('http://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID='+params.MasterID+'&'+params._1563237651079);
}

//车辆detil
export let detil = (params:any)=>{
  return request.get('http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID='+params.SerialID+'&'+params._1563237651079);
}