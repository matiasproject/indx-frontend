import { useQuery, useQueryClient } from '@tanstack/react-query';
import { oneDayInMilliseconds } from 'constants';
import * as api from 'api';

export function useQueryPodcastById(id, episodeId = '') {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(
    ['getPodcastById', id], () => api.getPodcastById(id),
    {
      keepPreviousData: true,
      staleTime: oneDayInMilliseconds,
      initialData: () => queryClient.getQueryData(['getPodcastById', id]),
      select: tracks => {
        const { resultCount, results } = tracks;
        const sliceResults = results.slice(1);

        return {
          resultCount,
          results: episodeId ? sliceResults.find(({trackId}) => trackId === Number(episodeId)) : sliceResults,
        }
      },
    },
  );

  return { isLoading, error, data };
}
