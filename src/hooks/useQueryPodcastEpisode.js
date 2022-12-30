import { useQuery, useQueryClient } from '@tanstack/react-query';
import { oneDayInMilliseconds } from 'constants';
import * as api from 'api';

export function useQueryPodcastEpisode(podcastId) {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(
    ['getPodcast'], () => api.getPodcast(),
    {
      keepPreviousData: true,
      staleTime: oneDayInMilliseconds,
      initialData: () => queryClient.getQueryData(['getPodcast']),
      select: podcasts => {
        const {feed: { entry }} = podcasts;

        return entry.find(({id}) => id.attributes['im:id'] === podcastId);
      },
    }
  );
  return { isLoading, error, data };
}
