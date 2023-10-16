import React from 'react';

import { Dialog } from '@/common';

interface DialogContextModel {
  dialog: Dialog;
  setDialog: (dialog: Dialog) => void;
}

interface Props {
  children: React.ReactNode;
}

const DialogContext = React.createContext<DialogContextModel>({
  dialog: { menssage: '', open: false, succeded: false },
  setDialog: () => {}
});

export const DialogProvider: React.FC<Props> = props => {
  const { children } = props;
  const [dialog, setDialog] = React.useState<Dialog>({
    open: false,
    menssage: '',
    succeded: false
  });

  return (
    <DialogContext.Provider value={{ dialog, setDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialogContext = () => React.useContext(DialogContext);
