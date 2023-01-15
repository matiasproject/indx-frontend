import styled from 'styled-components';

export const StyledNotFound = styled.section`
  height: 100vh;
  display: grid;
  place-content: center;
  > h2 {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.sizes.title};
    font-weight: 500;
  }
`;
