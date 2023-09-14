import React from 'react';
import { MovementAccountVm } from '../movement-list.vm';
import classes from './movement-list-table.module.css';
import { MovementListRowComponent } from './movement-list-row.component';

interface Props {
  movementsList: MovementAccountVm[];
}

export const MovementListTableComponent: React.FC<Props> = props => {
  const { movementsList } = props;
  return (
    <div className={classes.container}>
      <div className={classes.tableContainer}>
        <div className={classes.tableHeader}>
          <span className={classes.tableCell}>FECHA</span>
          <span className={classes.tableCell}>FECHA VALOR</span>
          <span className={classes.tableCell}>DESCRIPCION</span>
          <span className={classes.tableCell}>IMPORTE</span>
          <span className={classes.tableCell}>SALDO DISPONIBLE</span>
        </div>
        {movementsList.map(movement => (
          <MovementListRowComponent
            key={movement.id}
            movementItem={movement}
          ></MovementListRowComponent>
        ))}
      </div>
    </div>
  );
};
