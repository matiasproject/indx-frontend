import { useFetch } from 'hooks';

export const PodcastListPage = () => {
  const { data } = useFetch('getPodcast');
  console.log(data);
  return (<h1>HOME</h1>);
};

export const podcastList = {
  element: <PodcastListPage />,
  path: '/',
};
