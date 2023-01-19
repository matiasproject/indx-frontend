import { useLocation } from 'react-router-dom';
import { Link } from 'components';
import { StyledHeader } from './Header.styles';
import { podcastList } from 'pages/PodcastList';
import loader from 'assets/images/loader.gif';
import chevronLeft from 'assets/images/chevron-left.svg';
import { loading } from 'state';

export const Header = () => {
  const isLoading = loading.value;
  const { pathname } = useLocation();
  const isNotRoot = pathname !== '/';

  return (
    <StyledHeader>
      <nav>
        <div>
          {isNotRoot && (
            <Link to={-1}>
              <img
                src={chevronLeft}
                height='auto'
                width='40px'
                alt='back'
                title='Back'
              />
            </Link>
          )}
          <Link to={podcastList.path}>
            <h1 title='Volver a home'>Podcaster</h1>
          </Link>
        </div>

        {isLoading && (
          <img
            src={loader}
            height='16px'
            width='22px'
            alt='loader'
          />
        )}
      </nav>
    </StyledHeader>
  );
};
