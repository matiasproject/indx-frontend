import { useQueryPodcastById } from 'hooks';
import { useParams } from 'react-router-dom';
import { MainLayout } from 'layouts';

export const PodcastDetailPage = () => {
  const { podcastId } = useParams();
  const { data } = useQueryPodcastById(podcastId);
  console.log(data);
  return (
    <MainLayout>
      <h1>DETAIL</h1>
    </MainLayout>
  );
};

export const podcastDetail = {
  element: <PodcastDetailPage />,
  path: '/podcast/:podcastId',
};
