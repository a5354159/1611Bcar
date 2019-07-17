import request from "@/utils/request";
// import request from '@/utils/request.ts';

// 首页list
export let addSign = (params: any) => {
  return request.get(
    "http://baojia.chelun.com/v2-car-getMasterBrandList.html?_1563237651079"
  );
};

//右侧车辆list
export let getContent = (params: any) => {
  return request.get(
    "http://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=" +
      params.MasterID +
      "&" +
      params._1563237651079
  );
};
//城市list
export function getcityList(payload: any) {
  return request.get("v1-city-alllist.html?_1563361809710");
}
//二级城市
export function secondCityList(payload: any) {
  return request.get(
    `v1-city-alllist.html?provinceid=${payload * 1}&_1563365785069`
  );
}

export function getlist(): Promise<any> {
  return request.get("/v2-car-getMasterBrandList.html");
}
export function rightUpdate(payload: any) {
  return request.get(
    `v2-car-getMakeListByMasterBrandId.html?MasterID=${payload *
      1}&_1563195024011`
  );
}

// export function deiltcar(payload: any) {
//   return request.get(
//     `v2-car-getInfoAndListById.html?SerialID=${payload * 1}&_1563328882019`
//   );
// }

//车辆detil
export let detil = (params: any) => {
  return request.get(
    "http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=" +
      params.SerialID +
      "&" +
      params._1563237651079
  );
};

//价格咨询
export let quotation = (params: any) => {
  return request.get(
    "http://baojia.chelun.com/v2-dealer-alllist.html?carId=" +
      params.carId +
      "&cityId=" +
      params.cityId +
      "&" +
      params._1563237651079
  );
};
