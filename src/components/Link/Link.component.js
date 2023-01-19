import { useNavigate, useLocation } from 'react-router-dom';
import { loading } from 'state';
import { StyledLink } from './Link.styles';

export const Link = ({children, to}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const showLoading = () => {
    if (to !== pathname) {
      loading.value = true;
      return setTimeout(() => {
        loading.value = false;
        navigate(to);
      }, 800);
    }
    return false;
  };

  return (
    <StyledLink onClick={showLoading}>
      {children}
    </StyledLink>
  )
};
