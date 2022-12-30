import { useQuery, useQueryClient } from '@tanstack/react-query';
import { oneDayInMilliseconds } from 'constants';
import * as api from 'api';

export function useQueryPodcastById(id) {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(
    ['getPodcastById', id], () => api.getPodcastById(id),
    {
      keepPreviousData: true,
      staleTime: oneDayInMilliseconds,
      initialData: () => queryClient.getQueryData(['getPodcastById', id]),
    }
  );
  return { isLoading, error, data };
}
