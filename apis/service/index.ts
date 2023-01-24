import API from "@apis/client";

//  type
import { getItemsType } from "@customTypes/service";

// 가라 데이터
import getItemsApiData from "@static/data/service.json"

/**
 * 아이템 목록 가져오기 API
 * @function getItemApi
 * @param {number} page 페이지
 */
export const getItemsApi = () => {
    return getItemsApiData;
};