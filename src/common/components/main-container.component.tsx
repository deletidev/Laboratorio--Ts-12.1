import React from 'react';
import styles from './main-container.component.module.css';
interface Props {
  children: React.ReactNode;
}

export const MainContainerComponent: React.FC<Props> = props => {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
};
