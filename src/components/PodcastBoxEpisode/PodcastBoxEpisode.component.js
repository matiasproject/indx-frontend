import { StyledPodcastBoxEpisode } from './PodcastBoxEpisode.styles';
import { Description } from 'components';

export const PodcastBoxEpisode = ({track}) => {
  const {
    results: {
      trackName,
      description,
      episodeUrl,
    }} = track;

  return (
    <StyledPodcastBoxEpisode>
      <h3>{trackName}</h3>
      <Description text={description}/>
      <audio src={episodeUrl} controls />
    </StyledPodcastBoxEpisode>
  );
};
