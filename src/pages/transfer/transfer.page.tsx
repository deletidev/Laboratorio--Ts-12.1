import React from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { HeaderComponent, MainContainerComponent } from '@/common';

import { getAccountList, saveTransfer } from './api';
import { AccountVm, TransferVm } from './transfer.vm';
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi
} from './transfer.mapper';

import { TransferFormComponent } from './components';

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
      <MainContainerComponent>
        <HeaderComponent title="Transferencias Nacionales"></HeaderComponent>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defaultAccountId={id}
        ></TransferFormComponent>
      </MainContainerComponent>
    </AppLayout>
  );
};
