import React from 'react';

import { AppLayout } from '@/layouts';
import {
  Dialog,
  DialogComponent,
  HeaderComponent,
  MainContainerComponent
} from '@/common';
import { AccountFormComponent } from './components';

export const AccountPage: React.FC = () => {
  const [dialog, setDialog] = React.useState<Dialog>({
    open: false,
    menssage: '',
    succeded: false
  });

  return (
    <>
      <AppLayout>
        <MainContainerComponent>
          <HeaderComponent title="Cuenta Bancaria"></HeaderComponent>
          <AccountFormComponent hadleDialog={setDialog}></AccountFormComponent>
        </MainContainerComponent>
      </AppLayout>
      <DialogComponent
        dialog={dialog}
        setDialog={setDialog}
        redirect="/account-list"
      ></DialogComponent>
    </>
  );
};
