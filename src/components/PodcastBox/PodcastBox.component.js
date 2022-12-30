import { Link } from 'components';
import { StyledPodcastBox } from './PodcastBox.styles';

export const PodcastBox = ({podcast}) => {
  const {
    id: { attributes: { 'im:id': podcastId} },
    'im:name': {label: podcastName},
    'im:artist': {label: artist},
    'im:image': image,
  } = podcast;

  const { label: imageUrl } = image[2];
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
