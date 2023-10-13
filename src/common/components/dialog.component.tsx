import React from 'react';
import styles from './dialog.component.module.css';

export interface Dialog {
  open: Boolean;
  menssage: string;
  succeded: Boolean;
}
export interface Props {
  dialog: Dialog;
  setDialog: (objet: Dialog) => void;
  redirect?: string;
}

export const DialogComponent: React.FC<Props> = props => {
  const { dialog, setDialog, redirect } = props;

  const handleClick = () => {
    setDialog({ open: false, menssage: '', succeded: false });
    if (redirect && redirect !== undefined) {
      window.location.replace(redirect);
    }
  };
  React.useEffect(() => {
    if (dialog.open) {
      document.body.style.overflow = 'hidden';
    }
  }, [dialog.open]);

  return (
    <>
      {dialog.open && (
        <div className={styles.container}>
          <div className={styles.dialog}>
            <span
              className={`material-symbols-outlined ${
                dialog.succeded ? styles.succeded : styles.error
              }`}
            >
              {dialog.succeded ? 'check_circle' : 'cancel'}
            </span>
            <p>{dialog.menssage}</p>
            <button onClick={handleClick}>Acceptar</button>
          </div>
        </div>
      )}
    </>
  );
};
