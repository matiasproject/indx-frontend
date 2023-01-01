import styled from 'styled-components';

export const StyledPodcastBoxDetail = styled.section`
  width: 300px;
  img {
    margin-bottom: 20px;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
  }
  a {
    display: block;
    color: inherit;
  }
  > div, > a > div {
    box-shadow: 1px 1px 11px 1px rgb(224 224 224 / 73%);
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    > div {
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
      padding: 10px;
      &:first-child {         
        text-align: center;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  h3 {
    font-size: ${({ theme }) => theme.sizes.subTitle};
    line-height: ${({ theme }) => theme.lineHeight.subTitle};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 10px;
    word-wrap: break-word;
    font-weight: 600;
  }
  h4 {
    font-weight: 600;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.black};
  }
  p {
    font-size: ${({ theme }) => theme.sizes.paragraph};
    line-height: ${({ theme }) => theme.lineHeight.paragraph};
    color: ${({ theme }) => theme.colors.gray};
    word-wrap: break-word;
  }
`;
