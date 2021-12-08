import { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../header';
import { PageFooter } from '../footer';

type Props = {
  metaTitle: string;
  children: ReactNode;
};

export const Layout = ({ children, metaTitle }: Props) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Navbar />
        <main>{children}</main>
        <PageFooter />
      </div>
    </>
  );
};
