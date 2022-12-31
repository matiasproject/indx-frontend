import * as Component from 'components';
import { MainLayout } from 'layouts';
import { useQueryPodcastList, useInputSearch } from 'hooks';

export const PodcastListPage = () => {
  const {search, onFilterPodcast} = useInputSearch();
  const { data: podcasts } = useQueryPodcastList(search);

  return (
    <MainLayout>
      <Component.Searcher
        handleChange={onFilterPodcast}
        value={search}
        results={podcasts?.length}
      />
      <Component.PodcastGridList podcasts={podcasts} />
    </MainLayout>
  );
};
