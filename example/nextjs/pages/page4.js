import React, { Component } from "react";
import Link from 'next/link';

import { withI18next } from "../lib/withI18next";

class Page4 extends Component {
  static async getInitialProps() {
    const timeout = ms => new Promise(res => setTimeout(res, ms))
    await timeout(1000);
    return { content: "page prop via getInitialProps" };
  }

  render() {
    const { t, content } = this.props;

    console.log('content: ', content); // <-- logs undefined

    return(
      <div>
        <h1>{t('page4:welcomePage4')}</h1>
        <p>{t('common:integrates_react-i18next')}</p>
        <Link href="/">
          <a>{t('page4:link.gotoPage1')}</a>
        </Link>
      </div>
    );
  }
}

export default withI18next(["common", "page4"])(Page4);
