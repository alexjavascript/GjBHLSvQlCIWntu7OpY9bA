import { PropsWithChildren } from "react";
import { StoreProvider } from './store-provider';
import HTML from './html';

import '/public/styles/themes.css';

type Props = Readonly<PropsWithChildren>

function Layout(props: Props) {
  const { children } = props;

  return (
    <StoreProvider count={0}>
      <HTML>
        {children}
      </HTML>
    </StoreProvider>
  );
}

export default Layout;
