import { useQuery, useMutation, useQueryClient } from 'react-query';

//  apis
import {
  loginApi,
} from '@apis/auth';

//  types
import {
  loginType
} from '@customTypes/auth';

/**
 *  로그인 Fetch
 *  @function useLoginFetch
 */
const useLoginFetch = () => {
  const {
    mutate: loginFetchMutate,
    status: loginFetchStatus,
  } = useMutation(['login'], ({ email, password }: loginType) => loginApi({ email, password}), {
    onSuccess: (res) => {
      console.log(res)
    },
    onError: (err: any) => {
      if (err.response?.data?.message) {
        alert(err.response?.data?.message)
      }
    },
  });

  return {
    loginFetchMutate,
    loginFetchStatus,
  };
};

export {
  useLoginFetch,
}