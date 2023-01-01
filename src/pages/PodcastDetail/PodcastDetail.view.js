import { useParams } from 'react-router-dom';
import { useQueryPodcastById, useQueryPodcastEpisode } from 'hooks';
import { MainLayout } from 'layouts';
import * as Component from 'components';
import { StyledPodcastDetail, StyledLoading } from './PodcastDetail.styles';

export const PodcastDetailPage = () => {
  window.scrollTo(0, 0);
  const { podcastId } = useParams();
  const { data: trackList } = useQueryPodcastById(podcastId);
  const { data: podcastDetail } = useQueryPodcastEpisode(podcastId);

  return (
    <MainLayout>
      {
        (trackList && podcastDetail)
          ? (
            <StyledPodcastDetail>
              <Component.PodcastBoxDetail podcast={podcastDetail} />
              <Component.PodcastBoxDetailList trackList={trackList} />
            </StyledPodcastDetail>
          ) : (
            <StyledLoading>
              <p>Cargando...</p>
            </StyledLoading>
          )
      }
    </MainLayout>
  );
};
