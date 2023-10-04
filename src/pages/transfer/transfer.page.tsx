import React from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { HeaderComponent } from '@/common';

import { getAccountList, saveTransfer } from './api';
import { AccountVm, TransferVm } from './transfer.vm';
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi
} from './transfer.mapper';

import { TransferFormComponent } from './components';
import styles from './transfer.module.css';

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getAccountList().then(result =>
      setAccountList(result.map(mapAccountFromApiToVm))
    );
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    saveTransfer(mapTransferFromVmToApi(transferInfo)).then(result => {
      result
        ? alert('Transferencia realizada con éxito')
        : alert('Error al realizar la transferencia');
    });
  };

  return (
    <AppLayout>
      <div className={styles.container}>
        <HeaderComponent title="Transferencias Nacionales"></HeaderComponent>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defaultAccountId={id}
        ></TransferFormComponent>
      </div>
    </AppLayout>
  );
};
