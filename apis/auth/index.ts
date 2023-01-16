import API from "@apis/client";

//  type
import { loginType } from "@customTypes/auth";

/**
 * 로그인 API
 * @function loginApi
 * @param {string} email 이메일
 * @param {string} password 비밀번호
 */
export const loginApi = ({ email, password }: loginType) => {
  return API.post(`/auth/login`, {
    email,
    password,
  });
};