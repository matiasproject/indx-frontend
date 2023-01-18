import { useQuery, useQueryClient } from '@tanstack/react-query';
import * as api from 'api';

export function useQueryPodcastById(id, episodeId = '') {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['getPodcastById', id],
    queryFn: () => api.getPodcastById(id),
    initialData: () => queryClient.getQueryData(['getPodcastById', id]),
    select: tracks => {
      const { resultCount, results } = tracks;
      const sliceResults = results.slice(1);

      return {
        resultCount,
        results: episodeId ? sliceResults.find(({trackId}) => trackId === Number(episodeId)) : sliceResults,
      }
    },
  });

  return { isLoading, error, data };
}
