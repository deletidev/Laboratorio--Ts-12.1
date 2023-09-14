import React from 'react';
import { MovementAccountVm } from '../movement-list.vm';
import classes from './movement-list-row.module.css';

interface Props {
  movementItem: MovementAccountVm;
}

export const MovementListRowComponent: React.FC<Props> = props => {
  const { movementItem } = props;

  const classError = (valor: string) =>
    valor.includes('-')
      ? `${classes.rowCell} ${classes.alignRight} ${classes.error}`
      : `${classes.rowCell} ${classes.alignRight}`;

  return (
    <div className={classes.row}>
      <span className={classes.rowCell}>
        {movementItem.transaction.toLocaleDateString()}
      </span>
      <span className={`${classes.rowCell}`}>
        {movementItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.rowCell}`}>{movementItem.description}</span>
      <span
        className={classError(movementItem.amount)}
      >{`${movementItem.amount} €`}</span>
      <span
        className={classError(movementItem.balance)}
      >{`${movementItem.balance} €`}</span>
    </div>
  );
};
