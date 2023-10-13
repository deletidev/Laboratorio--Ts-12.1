import React from 'react';

import { AppLayout } from '@/layouts';
import { HeaderComponent, MainContainerComponent } from '@/common';

import { getAccountList } from './api';
import { mapAccountListFromApiToVm } from './account-list.mapper';
import { AccountVm } from './account-list.vm';
import { AccountListTableComponent } from './components/account-list-table.component';

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then(result =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <MainContainerComponent>
        <HeaderComponent
          title="Mis cuentas"
          buttonTitle="AGREGAR NUEVA CUENTA"
        ></HeaderComponent>
        <AccountListTableComponent accountList={accountList} />
      </MainContainerComponent>
    </AppLayout>
  );
};
