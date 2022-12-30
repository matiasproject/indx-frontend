import { useState, useCallback } from 'react';

export function useInputSearch() {
  const [search, setSearch] = useState('');

  const onFilterPodcast = useCallback(({target}) => {
    setSearch(target.value);
  }, [setSearch]);

  return {search, onFilterPodcast };
}
