import { StyledPodcastBoxDetailList } from './PodcastBoxDetailList.styles';
import { Link } from 'components';
import { formatDate, convertMsToTime } from 'utils';

export const PodcastBoxDetailList = ({trackList}) => {
  if (!trackList) {
    return null;
  }

  const { resultCount, results } = trackList;
  const trackResult = resultCount - 1;
  const tracks = results ?? [];

  return (
    <StyledPodcastBoxDetailList>
      <header>
        <h2>Episodes: {trackResult}</h2>
      </header>
      <section>
        <header>
          <span>Title</span>
          <span>Date</span>
          <span>Duration</span>
        </header>
        {
          tracks.map(track => (
            <div key={track.trackId}>
              <span>
                <Link to={`/podcast/${track.collectionId}/episode/${track.trackId}`}>
                  {track.trackName}
                </Link>
              </span>
              <span>{formatDate(track.releaseDate)}</span>
              <span>{convertMsToTime(track.trackTimeMillis)}</span>
            </div>
          ))
        }
      </section>
    </StyledPodcastBoxDetailList>
  );
};
