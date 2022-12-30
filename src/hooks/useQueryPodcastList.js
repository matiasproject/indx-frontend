import { useQuery, useQueryClient } from '@tanstack/react-query';
import { oneDayInMilliseconds } from 'constants';
import * as api from 'api';

export function useQueryPodcastList(search = '') {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(
    ['getPodcast'], () => api.getPodcast(),
    {
      keepPreviousData: true,
      staleTime: oneDayInMilliseconds,
      initialData: () => queryClient.getQueryData(['getPodcast']),
      select: podcasts => {
        const {feed: { entry }} = podcasts;

        return entry.filter(podcast => {
          const {'im:name': name, 'im:artist': artist} = podcast;

          return (
            (name.label.toLowerCase().includes(search.toLowerCase()))
            || (artist.label.toLowerCase().includes(search.toLowerCase()))
          )
        });
      },
    }
  );
  return { isLoading, error, data };
}
