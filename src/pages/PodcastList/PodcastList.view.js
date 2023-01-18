import * as Component from 'components';
import { MainLayout } from 'layouts';
import { useQueryPodcastList, useInputSearch } from 'hooks';

export const PodcastListPage = () => {
  const {search, onFilterPodcast} = useInputSearch();
  const { data: podcasts, error, isLoading } = useQueryPodcastList(search);

  return (
    <MainLayout error={error} isLoading={isLoading}>
      <Component.Searcher
        handleChange={onFilterPodcast}
        value={search}
        results={podcasts?.length}
      />
      <Component.PodcastGridList podcasts={podcasts} />
    </MainLayout>
  );
};
