import React, { Fragment, FC } from 'react';

import Header from '../components/Header';
import aboutImg from '../assets/about.jpg';

interface AboutProps {
  translate: (key: string) => string
}

const About: FC<AboutProps> = ({ translate }) => {
  return(
    <Fragment>
      <Header />
      <section className="about">
        <div className="container">
          <h1>{translate('about')}</h1>
          <img src={aboutImg} alt=""/>
          <p>{translate('aboutUsText')}</p>
        </div>
      </section>
    </Fragment>
  );
}

export default About;