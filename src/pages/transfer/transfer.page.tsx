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
import { useDialogContext } from '@/core/providers';

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const { setDialog } = useDialogContext();

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getAccountList().then(result =>
      setAccountList(result.map(mapAccountFromApiToVm))
    );
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    saveTransfer(mapTransferFromVmToApi(transferInfo))
      .then(result => {
        result &&
          setDialog({
            open: true,
            menssage: 'Transferencia realizada con éxito',
            succeded: true
          });
      })
      .catch(error => {
        error &&
          setDialog({
            open: true,
            menssage: 'Error al realizar la transferencia',
            succeded: false
          });
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
