import * as React from 'react';
// import logo from 'images/logo.svg';
import styles from './style.scss';

const logo = 'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png';

const Logo = () => (
  <a className={styles.logoContainer} href="http://www.google.com">
    <img src={logo} alt="Logo" className={styles.logo} />
  </a>
);

export default Logo;
