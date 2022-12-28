import { useEffect } from 'react';
import { MainLayout } from 'layouts';
import { useFetch } from 'hooks';
import { loading } from 'state';
import { services } from 'constants';

export const PodcastListPage = () => {
  const { isFetching } = useFetch(services.getPodcast);

  useEffect(function sincronizeStateService () {
    loading.value = isFetching;
  }, [isFetching]);

  return (
    <MainLayout>
      <h1>PodcastListPage</h1>
    </MainLayout>
  );
};

export const podcastList = {
  element: <PodcastListPage />,
  path: '/',
};
