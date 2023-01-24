import { useQuery, useMutation, useQueryClient } from 'react-query';

//  apis
import { getItemsApi } from '@apis/service';

//  type
import { getItemsType } from "@customTypes/service";

/**
 *  아이템 목록 가져오기 Fetch
 *  @function useGetItemsFetch
 */
const useGetItemsFetch = () => {
  const {
    data: getItemsFetchData,
    refetch: getItemsRefetch,
  } = useQuery(
    ['getItems'],
    async () => {
      const postsData = getItemsApi();
      return postsData;
    },
    {
      cacheTime: 0,
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
      },
      onError: (err: any) => {
      },
    },
  );

  return {
    getItemsFetchData,
    getItemsRefetch,
  };
};

export {
  useGetItemsFetch,
}