import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Page404Props {
  translate: (key: string) => string
}

const Page404: FC<Page404Props> = ({ translate }) => {
  return(
    <section className="page-404">
      <div className="container">
        <h1>404</h1>
        <p>{translate('pageDoesNotExist')}</p>
        <p><Link to="/">{translate('returnToHomepage')}</Link></p>
      </div>
    </section>
  );
}

export default Page404;