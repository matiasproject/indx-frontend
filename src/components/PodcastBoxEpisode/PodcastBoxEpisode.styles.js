import styled from 'styled-components';

export const StyledPodcastBoxEpisode = styled.section`
  box-shadow: 1px 1px 11px 1px rgb(224 224 224 / 73%);
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;

  h3 {
    font-size: ${({ theme }) => theme.sizes.subTitle};
    line-height: ${({ theme }) => theme.lineHeight.subTitle};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 20px;
    word-wrap: break-word;
    font-weight: 600;
  }
  p {
    font-size: ${({ theme }) => theme.sizes.paragraph};
    line-height: ${({ theme }) => theme.lineHeight.paragraph};
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 40px;
  }
  audio {
    width: 100%;
  }
`;
