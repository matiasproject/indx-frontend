import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.styles';
import { podcastList } from 'pages/PodcastList';
import loader from 'assets/images/loader.gif';
import { loading } from 'state';

export const Header = () => {
  const isLoading = loading.value;

  return (
    <StyledHeader>
      <Link to={podcastList.path}>
        <h1>Podcaster</h1>
      </Link>
      {isLoading && (
        <img
          src={loader}
          height='16px'
          width='22px'
          alt='loader'
        />
      )}
    </StyledHeader>
  );
};
