import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider as Styled } from 'styled-components';
import StyledGlobal from 'styles/styled-global';
import styledTheme from 'styles/styled-theme';
import { routes } from 'pages';
import { oneDayInMilliseconds } from 'constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: oneDayInMilliseconds,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledGlobal />
      <Styled theme={styledTheme}>
        <RouterProvider router={routes} />
      </Styled>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
