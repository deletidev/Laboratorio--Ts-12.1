import { vi } from 'vitest';
import { Account } from '../account.vm';
import * as accountFieldValidation from './acount-field.validation';
import { validateForm } from './account-form.validation';

describe('account-form.validation specs', () => {
  describe('validateForm', () => {
    it('should return true when all fields are correct', () => {
      // Arrange
      const account: Account = {
        type: '1',
        name: 'John Doe'
      };

      vi.spyOn(accountFieldValidation, 'validateTypeField').mockReturnValue({
        succeeded: true
      });
      vi.spyOn(accountFieldValidation, 'validateNameField').mockReturnValue({
        succeeded: true
      });

      // Act
      const result = validateForm(account);
      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: '',
        name: ''
      });
    });

    it('should return false when field name is empty', () => {
      // Arrange
      const account: Account = {
        type: '1',
        name: ''
      };

      vi.spyOn(accountFieldValidation, 'validateTypeField').mockReturnValue({
        succeeded: true
      });
      vi.spyOn(accountFieldValidation, 'validateNameField').mockReturnValue({
        succeeded: false,
        errorMessage: 'Error'
      });

      // Act
      const result = validateForm(account);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: '',
        name: 'Error'
      });
    });

    it('should return false when field type is empty', () => {
      // Arrange
      const account: Account = {
        type: '',
        name: 'Ahorro'
      };

      vi.spyOn(accountFieldValidation, 'validateTypeField').mockReturnValue({
        succeeded: false,
        errorMessage: 'Error'
      });
      vi.spyOn(accountFieldValidation, 'validateNameField').mockReturnValue({
        succeeded: true
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: 'Error',
        name: ''
      });
    });
  });
});
