import * as Component from 'components';
import { MainLayout } from 'layouts';
import { useQueryPodcastList, useInputSearch } from 'hooks';

export const PodcastListPage = () => {
  const {search, onFilterPodcast} = useInputSearch();
  const { data: podcasts } = useQueryPodcastList(search);

  console.log(podcasts?.length)

  return (
    <MainLayout>
      <Component.Searcher
        handleChange={onFilterPodcast}
        value={search}
        results={podcasts?.length}
      />
      <section style={{marginTop: '200px'}}>
        <Component.PodcastGridList podcasts={podcasts} />
      </section>
    </MainLayout>
  );
};

export const podcastList = {
  element: <PodcastListPage />,
  path: '/',
};
