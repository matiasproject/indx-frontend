import styled from 'styled-components';

export const StyledPodcastDetail = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.large};
  padding: 100px 20px 0;
  box-sizing: border-box;
  margin: 0 auto 0;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 74px;
  grid-row-gap: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: block;
  }
`;
