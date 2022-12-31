import { useNavigate } from 'react-router-dom';
import { loading } from 'state';
import { StyledLink } from './Link.styles';

export const Link = ({children, to}) => {
  const navigate = useNavigate();
  const showLoading = () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      navigate(to);
    }, 800);
  };

  return (
    <StyledLink onClick={showLoading}>
      {children}
    </StyledLink>
  )
};
