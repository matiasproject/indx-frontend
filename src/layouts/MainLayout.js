import * as Component from 'components';

export const MainLayout = ({children}) => {
  return (
    <main>
      <Component.Header />
      <section>
        {children}
      </section>
    </main>
  )
};
