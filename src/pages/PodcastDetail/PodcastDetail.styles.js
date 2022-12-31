import styled from 'styled-components';

export const StyledPodcastDetail = styled.section`
  max-width: 1200px;
  padding: 100px 20px;
  box-sizing: border-box;
  margin: 0 auto 0;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 74px;
  grid-row-gap: 0px;
`;

export const StyledLoading = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  > p {
    font-size: ${({ theme }) => theme.sizes.subTitle};
    linet-height: ${({ theme }) => theme.lineHeight.subTitle};
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
  }
`;
