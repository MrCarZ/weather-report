import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import Header from '../../Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <Layout style={{ width: '100%' }}>
      <Header />
      <Content>
        <Suspense>
          <Outlet />
        </Suspense>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
