import { FormValidationResult } from '@/common';
import { AccountError, Account } from '../account.vm';
import {
  validateTypeField,
  validateNameField
} from './acount-field.validation';

export const validateForm = (
  account: Account
): FormValidationResult<AccountError> => {
  const fieldValidationResults = [
    validateTypeField(account.type),
    validateNameField(account.name)
  ];
  return {
    succeeded: fieldValidationResults.every(f => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? '',
      name: fieldValidationResults[1].errorMessage ?? ''
    }
  };
};
