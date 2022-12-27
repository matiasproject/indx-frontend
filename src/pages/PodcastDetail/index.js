import { useFetch } from 'hooks';
import { useParams } from 'react-router-dom';

export const PodcastDetailPage = () => {
  const { podcastId } = useParams();
  const { data } = useFetch('getPodcastById', podcastId);
  console.log(data);
  return (<h1>DETAIL</h1>);
};

export const podcastDetail = {
  element: <PodcastDetailPage />,
  path: '/podcast/:podcastId',
};
