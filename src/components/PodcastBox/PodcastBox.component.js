import { Link } from 'components';
import { StyledPodcastBox } from './PodcastBox.styles';
import { destructuringDataPodcasts } from 'utils';

export const PodcastBox = ({podcast}) => {
  const {
    podcastId,
    podcastName,
    artist,
    imageUrl,
  } = destructuringDataPodcasts(podcast);

  const title = podcastName.toUpperCase();

  return (
    <StyledPodcastBox>
      <Link to={`/podcast/${podcastId}`}>
        <img src={imageUrl} alt={title} />
        <div>
          <h3 title={title}>{title}</h3>
          <p>Author: {artist}</p>
        </div>
      </Link>
    </StyledPodcastBox>
  );
};
