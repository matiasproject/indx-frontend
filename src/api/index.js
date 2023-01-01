import { itunesPodcastUrl, corsHerokuUrl } from 'constants';

async function fetchPodcast(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();

  return data;
}

export const getPodcast = () => fetchPodcast(itunesPodcastUrl);

export const getPodcastById = (podcastId) => {
  const queryParams = `id=${podcastId}&media=podcast&entity=podcastEpisode`;

  return fetchPodcast(`${corsHerokuUrl}?${queryParams}`);
};
