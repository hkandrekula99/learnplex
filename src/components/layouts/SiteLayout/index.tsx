import React from 'react'
import { Layout } from 'antd'

import Header from './Header'

export default function SiteLayout({ children }: { children: any }) {
  return (
    <>
      <Layout className={'mh-100vh'}>
        <Layout.Header className={'pl-0'}>
          <Header />
        </Layout.Header>
        <Layout.Content className={`pt-3 py-2 h-100p`}>
          {children}
        </Layout.Content>
      </Layout>
    </>
  )
}

const getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>
export { getLayout as getSiteLayout }
