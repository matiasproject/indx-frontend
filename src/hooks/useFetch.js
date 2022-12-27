import { useQuery, useQueryClient } from '@tanstack/react-query';
import { oneDayInMilliseconds } from 'constants';
import * as api from 'api';

export function useFetch(type, param) {
  const queryClient = useQueryClient();
  const key = param ? [type, param] : [type];

  const { isFetching, error, data } = useQuery(
    key, () => {
      return api[type](param);
    }, {
      keepPreviousData: true,
      staleTime: oneDayInMilliseconds,
      initialData: () => queryClient.getQueryData(key, {
        exact: true,
      }),
    }
  );
  return { isFetching, error, data };
}
