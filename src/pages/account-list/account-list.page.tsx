import React from 'react';
import { AppLayout } from '@/layouts';
import { AccountVm } from './account-list.vm';
import classes from './account-list.page.module.css';
import { AccountListTableComponent } from './components/account-list-table.component';
import { getAccountList } from './api';
import { mapAccountListFromApiToVm } from './account-list.mapper';
import { HeaderComponent } from '@/common';

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then(result =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <HeaderComponent
          title="Mis cuentas"
          buttonTitle="AGREGAR NUEVA CUENTA"
        ></HeaderComponent>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
