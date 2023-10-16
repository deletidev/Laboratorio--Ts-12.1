import React from 'react';
import styles from './dialog.component.module.css';

export interface Dialog {
  open: Boolean;
  menssage: string;
  succeded: Boolean;
  redirect?: string;
}
export interface Props {
  dialog: Dialog;
  setDialog: (objet: Dialog) => void;
}

export const DialogComponent: React.FC<Props> = props => {
  const { dialog, setDialog } = props;

  const handleClick = () => {
    setDialog({ open: false, menssage: '', succeded: false });
    if (dialog.redirect && dialog.redirect !== undefined) {
      window.location.replace(dialog.redirect);
    }
  };

  React.useEffect(() => {
    if (dialog.open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [dialog.open]);

  return (
    <>
      {dialog.open && (
        <div className={styles.container} role="presentation">
          <div className={styles.dialog} role="dialog">
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
