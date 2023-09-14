import React from 'react';
import { useParams } from 'react-router-dom';

import { getAccount, getMovementsList } from './api';
import {
  InfoAccountVm,
  MovementAccountVm,
  createEmptyInfoAccountVm
} from './movement-list.vm';
import {
  mapInfoAccountFromApiToVm,
  mapMovementsListFromApiToVm
} from './movement-list.mapper';

import classes from './movement-list.module.css';
import { MovementListTableComponent } from './components/movement-list-table.component';
import { AppLayout } from '@/layouts';

export const MovementListPage: React.FC = () => {
  const [infoAcount, setInfoAccount] = React.useState<InfoAccountVm>(
    createEmptyInfoAccountVm()
  );
  const [movementsList, setMovementsList] = React.useState<MovementAccountVm[]>(
    []
  );

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getAccount(id).then(result => {
        setInfoAccount(mapInfoAccountFromApiToVm(result));
      });
      getMovementsList(id).then(result => {
        setMovementsList(mapMovementsListFromApiToVm(result));
      });
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.detail}>
            <p>SALDO DISPONIBLE</p>
            <h2
              className={classes.detailBalance}
            >{`${infoAcount.balance} €`}</h2>
          </div>
        </div>
        <div className={classes.info}>
          <p>{`Alias: ${infoAcount.name}`}</p>
          <p>{`IBAN: ${infoAcount.iban}`}</p>
        </div>
        <MovementListTableComponent
          movementsList={movementsList}
        ></MovementListTableComponent>
      </div>
    </AppLayout>
  );
};
