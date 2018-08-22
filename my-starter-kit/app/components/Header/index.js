import * as React from 'react';

import NavLink from 'components/NavLink';
import Logo from './Logo';
import styles from './style.scss';

export default () => (
  <div className={styles.header}>
    <NavLink to="/sample" label="Sample" styles={styles} />
    <Logo />
  </div>
);
