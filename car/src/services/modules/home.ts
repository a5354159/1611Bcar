import request from "@/utils/request";

export  function getlist(): Promise<Object> {
  return request.get("/v2-car-getMasterBrandList.html");
}
