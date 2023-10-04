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
      {buttonTitle && <button type="button">{buttonTitle}</button>}
    </div>
  );
};
