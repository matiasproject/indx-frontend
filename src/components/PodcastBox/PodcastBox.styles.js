import styled from 'styled-components';

export const StyledPodcastBox = styled.section`
  text-align: center;
  min-width: 250px;
  transition: all .2s ease-in-out;
  &:hover { transform: scale(1.03); }

  img {
    border-radius: 100px;
    margin-bottom: 20px;
    z-index: 1;
    width: 150px;
    height: 150px;
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
  }
  a {
    display: block;
    color: inherit;
  }
  div {
    margin-top: -105px;
    box-shadow: 1px 1px 11px 1px rgb(224 224 224 / 73%);
    padding: 100px 20px 20px;
    transition: all .2s ease-in-out;
  }
  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.sizes.subTitle};
    line-height: ${({ theme }) => theme.lineHeight.subTitle};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 10px;
  }
  p {
    font-size: ${({ theme }) => theme.sizes.paragraph};
    line-height: ${({ theme }) => theme.lineHeight.paragraph};
    color: ${({ theme }) => theme.colors.gray};
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    min-height: 40px;
  }
`;
