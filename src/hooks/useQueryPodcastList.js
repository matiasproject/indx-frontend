import { useQuery, useQueryClient } from '@tanstack/react-query';
import * as api from 'api';

export function useQueryPodcastList(search = '') {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['getPodcast'],
    queryFn: () => api.getPodcast(),
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
  });
  return { isLoading, error, data };
}
