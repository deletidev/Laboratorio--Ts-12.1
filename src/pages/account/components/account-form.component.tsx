import React from 'react';

import styles from './account-form.component.module.css';
import { saveAccount } from '../api';
import {
  Account,
  createEmptyAccount,
  createEmptyAccountError
} from '../account.vm';
import { mapAccountInfoFromVmToApi } from '../account.mapper';
import { validateForm } from '../validations';
import { Dialog } from '@/common';

interface Props {
  hadleDialog: (object: Dialog) => void;
}
export const AccountFormComponent: React.FC<Props> = props => {
  const { hadleDialog } = props;
  const [account, setAccount] = React.useState<Account>(createEmptyAccount());
  const [errors, setErrors] = React.useState<Account>(
    createEmptyAccountError()
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);

    if (formValidationResult.succeeded) {
      saveAccount(mapAccountInfoFromVmToApi(account))
        .then(result => {
          if (result) {
            hadleDialog({
              open: true,
              menssage: 'Cuenta creada con éxito',
              succeded: true,
              redirect: '/account-list'
            });
          }
        })
        .catch(
          error =>
            error &&
            hadleDialog({
              open: true,
              menssage: 'Error al crear la nueva cuenta, inténtelo más tarde',
              succeded: false
            })
        );
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.formContainer} ${styles.formGrid}`}>
        <label htmlFor="type">Tipo de cuenta:</label>
        <div>
          <select
            name="type"
            id="type"
            onChange={handleFieldChange}
            value={account.type}
          >
            <option value="">Seleccionar</option>
            <option value="1">Cuenta corriente</option>
            <option value="2">Cuenta ahorro</option>
          </select>
          <p className={styles.error}> {errors.type}</p>
        </div>
        <label htmlFor="name">Alias:</label>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleFieldChange}
            value={account.name}
          />
          <p className={styles.error}> {errors.name}</p>
        </div>
      </div>
      <div className={styles.formGrid}>
        <button type="submit" className={styles.submitBtn}>
          GUARDAR
        </button>
      </div>
    </form>
  );
};
