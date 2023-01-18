import { useParams } from 'react-router-dom';
import { MainLayout } from 'layouts';
import * as Component from 'components';
import { useQueryPodcastById, useQueryPodcastEpisode } from 'hooks';
import { StyledPodcastEpisode } from './PodcastEpisode.styles';

export const PodcastEpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const {
    data: track,
    error: errorPodcastId,
    isLoading: isLoadingPodcastId,
  } = useQueryPodcastById(podcastId, episodeId);

  const {
    data: podcastDetail,
    error: errorPodcastDetail,
    isLoading: isLoadingPodcastDetail,

  } = useQueryPodcastEpisode(podcastId);

  return (
    <MainLayout
      error={errorPodcastId || errorPodcastDetail}
      isLoading={isLoadingPodcastId || isLoadingPodcastDetail}
    >
      <StyledPodcastEpisode>
        <section>
          <Component.PodcastBoxDetail podcast={podcastDetail} />
        </section>
        <section>
          <Component.PodcastBoxEpisode track={track} />
        </section>
      </StyledPodcastEpisode>
    </MainLayout>
  );
};
