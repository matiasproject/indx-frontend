import styled from 'styled-components';
import { rem } from 'polished';

export const StyledPodcastBoxDetailList = styled.section`
  > header {
    box-shadow: 1px 1px 11px 1px rgb(224 224 224 / 73%);
    padding: 20px;
    margin-bottom: 20px;
    > h2 {
      font-size: ${({ theme }) => theme.sizes.subTitle};
      line-height: ${({ theme }) => theme.lineHeight.subTitle};
      color: ${({ theme }) => theme.colors.black};
      font-weight: 600;
    }
  }
  > section {
    box-shadow: 1px 1px 11px 1px rgb(224 224 224 / 73%);
    padding: 20px;
    height: calc(100vh - 250px);
    overflow: auto;

    > header {
      padding: 5px 10px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
      margin-bottom: 10px;
      > span {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.sizes.paragraph};
        font-size: ${({ theme }) => theme.lineHeight.paragraph};
      }
    }
    > div {
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
      color: ${({ theme }) => theme.colors.gray};
      padding: 10px;
      &:nth-child(odd) {
        background-color: ${({ theme }) => theme.colors.lightGray};
      }
    }
    > header, > div {
      display: grid;
      grid-template-columns: 1fr repeat(2, 100px);
      grid-template-rows: 1fr;
      align-items: center;
      > span {
        font-size: ${rem('13px')};
        font-size: ${rem('16px')};
        &:last-child {
          text-align: right;
        }
        > span {
          color: ${({ theme }) => theme.colors.blue};
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
