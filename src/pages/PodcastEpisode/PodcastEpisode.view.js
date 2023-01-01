import { useParams } from 'react-router-dom';
import { MainLayout } from 'layouts';
import * as Component from 'components';
import { useQueryPodcastById, useQueryPodcastEpisode } from 'hooks';
import { StyledPodcastEpisode, StyledLoadingEpisode } from './PodcastEpisode.styles';

export const PodcastEpisodePage = () => {
  window.scrollTo(0, 0);
  const { podcastId, episodeId } = useParams();
  const { data: track } = useQueryPodcastById(podcastId, episodeId);
  const { data: podcastDetail } = useQueryPodcastEpisode(podcastId);

  return (
    <MainLayout>
      {
        (track && podcastDetail)
          ? (
            <StyledPodcastEpisode>
              <section>
                <Component.PodcastBoxDetail podcast={podcastDetail} />
              </section>
              <section>
                <Component.PodcastBoxEpisode track={track} />
              </section>
            </StyledPodcastEpisode>
          ) : (
            <StyledLoadingEpisode>
              <p>Cargando...</p>
            </StyledLoadingEpisode>
          )
      }
    </MainLayout>
  );
};
