import { MainLayout } from 'layouts';
import { StyledNotFound } from './NotFoundPage.styles';

export const NotFoundPage = () => {
  return (
    <MainLayout>
      <StyledNotFound>
        <h2>Not found</h2>
      </StyledNotFound>
    </MainLayout>
  );
};
