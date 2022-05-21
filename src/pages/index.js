import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home() {
  return (
    <Layout noFooter
      title={`Home`}
      description="A minimal React Hooks library that saves you time and lines of code.">

      <main className='home'>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
