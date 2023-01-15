import { itunesPodcastUrl, corsHerokuUrl } from 'constants';

async function fetchPodcast(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();

  return data;
}

export const getPodcast = () => fetchPodcast(itunesPodcastUrl);

export const getPodcastById = (podcastId) => {
  // correct config url service see: https://developer.apple.com/forums/thread/654141
  const queryParams = `id=${podcastId}&media=podcast&entity=podcastEpisode`;

  return fetchPodcast(`${corsHerokuUrl}?${encodeURIComponent(queryParams)}`);
};
