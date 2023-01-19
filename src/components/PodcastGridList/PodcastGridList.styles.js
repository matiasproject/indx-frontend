import styled from 'styled-components';

export const StyledPodcastGridList = styled.section`
    max-width: ${({ theme }) => theme.breakpoints.large};
    margin: 0 auto;
    padding: 200px 20px 20vh;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 44px;
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: block;
    }
`;
