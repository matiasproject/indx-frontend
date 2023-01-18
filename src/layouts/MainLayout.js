import * as Component from 'components';
import { Error } from 'components';
import { StyledLoading } from 'styles/styled-global';

export const MainLayout = ({children, error, isLoading}) => {
  window.scrollTo(0, 0);

  if (error) {
    return (
      <main>
        <Component.Header />
        <Error />
      </main>
    );
  }

  if (isLoading) {
    return (
      <main>
        <Component.Header />
        <StyledLoading>
          <p>Cargando...</p>
        </StyledLoading>
      </main>
    );
  }

  return (
    <main>
      <Component.Header />
      <section>{children}</section>
    </main>
  )
};
