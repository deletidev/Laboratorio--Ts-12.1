import { REQUIRED_FIELD_MESSAGE } from '@/common';
import {
  validateNameField,
  validateTypeField
} from './acount-field.validation';

describe('account-field.validation specs', () => {
  describe('validateTypeField', () => {
    it('sould return false when type is empty', () => {
      //Arrange
      const value = '';

      //Act
      const result = validateTypeField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it('sould return true when type is well formed', () => {
      //Arrange
      const value = '1';

      //Act
      const result = validateTypeField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe('validateNameField', () => {
    it('sould return false when name is empty', () => {
      //Arrange
      const value = '';

      //Act
      const result = validateNameField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it('sould return true when name is well formed', () => {
      //Arrange
      const value = 'New Account';

      //Act
      const result = validateNameField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
