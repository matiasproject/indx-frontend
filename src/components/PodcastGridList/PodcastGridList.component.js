import { PodcastBox } from 'components';
import { StyledPodcastGridList } from './PodcastGridList.styles';

export const PodcastGridList = ({podcasts}) => {
  return (
    <StyledPodcastGridList>
      {podcasts?.map(podcast => (
        <PodcastBox
          key={podcast.id.attributes['im:id']}
          podcast={podcast}
        />
      ))}
    </StyledPodcastGridList>
  );
};
