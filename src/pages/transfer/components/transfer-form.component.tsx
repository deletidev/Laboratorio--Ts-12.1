import React from 'react';
import {
  AccountVm,
  TransferError,
  TransferVm,
  createEmptyTransferError,
  createEmptyTransferVm
} from '../transfer.vm';
import { validateForm } from '../validations';
import styles from './transfer-form.component.module.css';

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string;
}

export const TransferFormComponent: React.FC<Props> = props => {
  const { accountList, onTransfer, defaultAccountId } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm()
  );
  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  React.useEffect(() => {
    setTransfer({ ...transfer, accountId: defaultAccountId ?? '' });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onTransfer(transfer);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <div>
          <label htmlFor="accountId">Seleccione cuenta origen</label>
          <select
            name="accountId"
            id="accountId"
            onChange={handleFieldChange}
            value={transfer.accountId}
          >
            {accountList.map(account => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
            <option value="">Seleccione una cuenta</option>
          </select>
          <p className={styles.error}> {errors.accountId}</p>
        </div>
        <div>
          <label htmlFor="iban">Ingrese el IBAN del beneficiario</label>
          <input
            type="text"
            name="iban"
            id="iban"
            onChange={handleFieldChange}
          />
          <p className={styles.error}> {errors.iban}</p>
        </div>
        <div>
          <label htmlFor="name">Beneficiario</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleFieldChange}
          />
          <p className={styles.error}> {errors.name}</p>
        </div>
        <div>
          <label htmlFor="amount">Beneficiario</label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={handleFieldChange}
            className={styles.smallInput}
          />
          <p className={styles.error}> {errors.amount}</p>
        </div>
        <div>
          <label htmlFor="concept">Concepto</label>
          <input
            type="text"
            name="concept"
            id="concept"
            onChange={handleFieldChange}
          />
          <p className={styles.error}>{errors.concept}</p>
        </div>
        <div>
          <label htmlFor="notes">Observaciones</label>
          <input
            type="notes"
            name="notes"
            id="notes"
            onChange={handleFieldChange}
          />
          <p className={styles.error}>{errors.notes}</p>
        </div>
      </div>
      <div className={styles.formContainer}>
        <div>
          <p>
            Para que la transferencia se realice en otra fecha diferente a la de
            hoy, por favor, indíquenos la fecha de ejecución:
          </p>
          <div>
            <label htmlFor="realDateTransfer">Fecha de ejecución:</label>
            <input
              name="realDateTransfer"
              id="realDateTransfer"
              type="date"
              onChange={handleFieldChange}
            />
          </div>
          <p className={styles.error}>{errors.realDateTransfer}</p>
        </div>
      </div>
      <div className={styles.formContainer}>
        <div>
          <p>Escriba una dirección de email para dar aviso al beneficiario:</p>
          <div>
            <label htmlFor="email">Email del beneficiario:</label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={handleFieldChange}
            />
          </div>
          <p className={styles.error}>{errors.email}</p>
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        REALIZAR LA TRANSFERENCIA
      </button>
    </form>
  );
};
