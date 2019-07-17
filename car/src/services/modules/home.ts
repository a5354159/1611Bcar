import request from "@/utils/request";

export function getlist(): Promise<Object> {
  return request.get("/v2-car-getMasterBrandList.html");
}
export function rightUpdate(payload: any) {
  return request.get(
    `v2-car-getMakeListByMasterBrandId.html?MasterID=${payload *
      1}&_1563195024011`
  );
}
export function deiltcar(payload: any) {
  return request.get(
    `v2-car-getInfoAndListById.html?SerialID=${payload * 1}&_1563328882019`
  );
}
