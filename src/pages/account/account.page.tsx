import React from 'react';

import { AppLayout } from '@/layouts';
import { HeaderComponent, MainContainerComponent } from '@/common';
import { AccountFormComponent } from './components';
import { useDialogContext } from '@/core/providers/dialog.component.context';

export const AccountPage: React.FC = () => {
  const { setDialog } = useDialogContext();

  return (
    <AppLayout>
      <MainContainerComponent>
        <HeaderComponent title="Cuenta Bancaria"></HeaderComponent>
        <AccountFormComponent hadleDialog={setDialog}></AccountFormComponent>
      </MainContainerComponent>
    </AppLayout>
  );
};
