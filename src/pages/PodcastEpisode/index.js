import { useFetch } from 'hooks';
import { useParams } from 'react-router-dom';

export const PodcastEpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const { data } = useFetch('getPodcastById', podcastId);
  console.log(data, podcastId, episodeId);
  return (<h1>EPISODE</h1>);
};

export const podcastEpisode = {
  element: <PodcastEpisodePage />,
  path: '/podcast/:podcastId/episode/:episodeId',
};
