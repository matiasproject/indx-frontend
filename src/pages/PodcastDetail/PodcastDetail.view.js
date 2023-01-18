import { useParams } from 'react-router-dom';
import { useQueryPodcastById, useQueryPodcastEpisode } from 'hooks';
import { MainLayout } from 'layouts';
import * as Component from 'components';
import { StyledPodcastDetail } from './PodcastDetail.styles';

export const PodcastDetailPage = () => {
  const { podcastId } = useParams();
  const {
    data: trackList,
    error: errorPodcastId,
    isLoading: isLoadingPodcastId,
  } = useQueryPodcastById(podcastId);

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
      <StyledPodcastDetail>
        <Component.PodcastBoxDetail podcast={podcastDetail} />
        <Component.PodcastBoxDetailList trackList={trackList} />
      </StyledPodcastDetail>
    </MainLayout>
  );
};
