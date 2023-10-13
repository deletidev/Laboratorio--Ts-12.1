import { Link } from 'react-router-dom';

import { appRoutes } from '@/core/router';

import styles from './header.component.module.css';

interface Props {
  title: string;
  buttonTitle?: string;
}

export const HeaderComponent: React.FC<Props> = props => {
  const { title, buttonTitle } = props;

  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      {buttonTitle && <Link to={appRoutes.createAccount}>{buttonTitle}</Link>}
    </div>
  );
};
