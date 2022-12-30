import { StyledSearcher } from './Searcher.styles';

export const Searcher = ({
  handleChange,
  value,
  results,
}) => {
  return (
    <StyledSearcher>
      <span>{results}</span>
      <input
        type='text'
        onChange={handleChange}
        value={value}
        placeholder={'Filter podcasts...'}
      />
    </StyledSearcher>
  );
};

Searcher.defaultProps = {
  numResults: 0,
};
