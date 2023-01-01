import * as Component from 'components';
import { StyledPodcastBoxDetail } from './PodcastBoxDetail.styles';
import { destructuringDataPodcasts } from 'utils';

export const PodcastBoxDetail = ({podcast}) => {
  const {
    podcastId,
    podcastName,
    artist,
    imageUrl,
    description,
  } = destructuringDataPodcasts(podcast);

  return (
    <StyledPodcastBoxDetail>
      <div>
        <div>
          <Component.Link to={`/podcast/${podcastId}`}>
            <img src={imageUrl} alt={podcastName} />
          </Component.Link>
        </div>
        <div>
          <h3 title={podcastName}>
            <Component.Link to={`/podcast/${podcastId}`}>
              {podcastName}
            </Component.Link>
          </h3>
          <p>{artist}</p>
        </div>
        <div>
          <h4>Description:</h4>
          <Component.Description
            text={description}
          />
        </div>
      </div>
    </StyledPodcastBoxDetail>
  );
};
