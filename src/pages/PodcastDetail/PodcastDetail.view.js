import { useParams } from 'react-router-dom';
import { useQueryPodcastById, useQueryPodcastEpisode } from 'hooks';
import { MainLayout } from 'layouts';
import * as Component from 'components';
import { StyledPodcastDetail, StyledLoading } from './PodcastDetail.styles';

export const PodcastDetailPage = () => {
  window.scrollTo(0, 0);
  const { podcastId } = useParams();
  const { data: episodeList } = useQueryPodcastById(podcastId);
  const { data: podcastDetail } = useQueryPodcastEpisode(podcastId);

  console.log(episodeList, podcastDetail);
  return (
    <MainLayout>
      {
        (episodeList && podcastDetail)
          ? (
            <StyledPodcastDetail>
              <Component.PodcastBoxDetail podcast={podcastDetail} />
              <section style={{background: '#efefef'}}>content</section>
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
