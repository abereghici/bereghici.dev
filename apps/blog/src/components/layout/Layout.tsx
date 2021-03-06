import * as React from 'react';
import styled from '@emotion/styled';
import { Block } from '@bereghici/design-system.block';

import { Header } from './header';
import { Footer } from './footer';
import { Meta, MetaProps } from './meta';

interface Props {
  children: React.ReactNode;
  meta: MetaProps;
}

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const Layout = ({ meta, children }: Props) => {
  return (
    <Wrapper>
      <Meta {...meta} />
      <Header />
      <Block as="main" flex="1" backgroundColor="backgroundSecondary">
        {children}
      </Block>
      <Footer />
    </Wrapper>
  );
};
