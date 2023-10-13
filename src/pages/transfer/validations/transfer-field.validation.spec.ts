import {
  REQUIRED_FIELD_MESSAGE,
  INVALID_IBAN_MESSAGE,
  INVALID_AMOUNT_MESSAGE,
  INVALID_REAL_DATE_TRANSFER_MESSAGE,
  INVALID_EMAIL_MESSAGE
} from '@/common';

import {
  validateIBANField,
  validateAccountIdField,
  validateNameField,
  validateAmountField,
  validateConceptField,
  validateRealDateTransferField,
  validateEmailField
} from './transfer-field.validation';

describe('transfer-field.validation specs', () => {
  describe('validateIBANField', () => {
    it('sould return false when iban is empty', () => {
      //Arrange
      const value = '';

      //Act
      const result = validateIBANField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it('sould return false when iban is not well formed', () => {
      //Arrange
      const value = 'ES91 2100 0418 4502 0003 1333';

      //Act
      const result = validateIBANField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_IBAN_MESSAGE);
    });

    it('sould return true when iban is well formed', () => {
      //Arrange
      const value = 'ES91 2100 0418 4502 0005 1332';

      //Act
      const result = validateIBANField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe('validateAccountIdField', () => {
    it('sould return false when accountId is empty', () => {
      //Arrange
      const value = '';

      //Act
      const result = validateAccountIdField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it('sould return true when accountId is well formed', () => {
      //Arrange
      const value = '1';

      //Act
      const result = validateAccountIdField(value);

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
      const value = 'Jonh Doe';

      //Act
      const result = validateNameField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe('validateAmountField', () => {
    it('sould return false when amount is empty', () => {
      //Arrange
      const value = -1;

      //Act
      const result = validateAmountField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
    });

    it('sould return true when amount is well formed', () => {
      //Arrange
      const value = 1;

      //Act
      const result = validateAmountField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe('validateConceptField', () => {
    it('sould return false when concept is empty', () => {
      //Arrange
      const value = '';

      //Act
      const result = validateConceptField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it('sould return true when concept is well formed', () => {
      //Arrange
      const value = 'Concept';

      //Act
      const result = validateConceptField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe('validateRealDateTransferField', () => {
    it('should return true when realDate is not informed', () => {
      // Arrange
      const value = undefined;

      // Act
      const result = validateRealDateTransferField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it('should return false when realDate is before today', () => {
      // Arrange
      const value = new Date();
      const myDate = new Date(value.setDate(value.getDate() - 1))
        .toISOString()
        .split('T')[0];

      // Act
      const result = validateRealDateTransferField(myDate);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_REAL_DATE_TRANSFER_MESSAGE);
    });

    it('should return true when realDate is after today', () => {
      // Arrange
      const value = new Date();
      const myDate = new Date(value.setDate(value.getDate() + 1))
        .toISOString()
        .split('T')[0];

      // Act
      const result = validateRealDateTransferField(myDate);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe('validateEmailField', () => {
    it('should return true when email is not informed', () => {
      // Arrange
      const value = '';

      // Act
      const result = validateEmailField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
    it('should return false when email is not well formed', () => {
      // Arrange
      const value = 'john@gmail';

      // Act
      const result = validateEmailField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_EMAIL_MESSAGE);
    });
    it('should return true when email is well formed', () => {
      // Arrange
      const value = 'john@gmail.com';
      // Act
      const result = validateEmailField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
