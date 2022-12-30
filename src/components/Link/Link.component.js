import { Link as LinkRouter } from 'react-router-dom';
import { loading } from 'state';

export const Link = ({children, to}) => {
  const showLoading = () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 1500);
  };

  return (
    <LinkRouter to={to} onClick={showLoading}>
      {children}
    </LinkRouter>
  )
};
