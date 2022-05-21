import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './home.css';


export default function HomepageFeatures() {
  return (
    <section className='haiku-hero'>
      <img src={useBaseUrl('/img/logo.svg')} />
      <Link to="/docs/intro">
        <button>Documentation</button>
      </Link>
    </section>
  );
}
