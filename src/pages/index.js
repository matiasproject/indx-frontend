import { createBrowserRouter } from 'react-router-dom';
import { podcastList } from './PodcastList';
import { podcastDetail } from './PodcastDetail';
import { podcastEpisode } from './PodcastEpisode';
import { NotFound } from './NotFound';

export const routes = createBrowserRouter([
  podcastList,
  podcastDetail,
  podcastEpisode,
  NotFound,
]);
