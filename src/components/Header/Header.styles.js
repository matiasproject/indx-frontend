import styled from 'styled-components';
import { rem } from 'polished';

export const StyledHeader = styled.header`
    font-size: ${({ theme }) => theme.sizes.title};
    font-weight: 600;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.blue};
    padding: ${rem('20px')};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
