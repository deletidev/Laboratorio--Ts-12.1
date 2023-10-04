import {
  isValidIban,
  isPositiveNumber,
  isDateAfterToday,
  isEMailWellFormed,
  isStringValueInformed,
  isValueNotNullorUndefined
} from './plain.validations';

describe('plain.validation', () => {
  describe('isValidIban specs', () => {
    it('should return true when iban is valid', () => {
      // Arrange
      const iban = 'ES91 2100 0418 4502 0005 1332';
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });

    it('should return true when iban is formatted with dashes is valid', () => {
      // Arrange
      const iban = 'ES91-2100-0418-4502-0005-1332';
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });

    it('should return true when iban is formatted with no spaces is valid', () => {
      // Arrange
      const iban = 'ES9121000418450200051332';
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when iban is invalid', () => {
      // Arrange
      const iban = 'ES91 2100 0418 4502 0005 1333';
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when iban is empty', () => {
      // Arrange
      const iban = '';
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe('isPositiveNumber', () => {
    it('should return true when amount is positive', () => {
      //Arrange
      const amount = 1;

      //Act
      const result = isPositiveNumber(amount);

      //Assert
      expect(result).toBeTruthy();
    });
    it('should return false when amount is negative', () => {
      //Arrange
      const amount = -1;

      //Act
      const result = isPositiveNumber(amount);

      //Assert
      expect(result).toBeFalsy();
    });
  });

  describe('isDateAfterToday specs', () => {
    it('should return true when date is after today', () => {
      // Arrange
      const date = new Date();
      const myDate = new Date(date.setDate(date.getDate() + 1))
        .toISOString()
        .split('T')[0];

      // Act
      const result = isDateAfterToday(myDate);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when date is before today', () => {
      // Arrange
      const date = new Date();
      const myDate = new Date(date.setDate(date.getDate() - 1))
        .toISOString()
        .split('T')[0];

      // Act
      const result = isDateAfterToday(myDate);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when date is today', () => {
      // Arrange
      const date = new Date().toISOString().split('T')[0];

      // Act
      const result = isDateAfterToday(date);

      // Assert
      expect(result).toBeTruthy();
    });
  });

  describe('isEMailWellFormed specs', () => {
    it('should return true when email is well formed', () => {
      // Arrange
      const email = 'john@gmail.com';

      // Act
      const result = isEMailWellFormed(email);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when email is not well formed', () => {
      // Arrange
      const email = 'john@gmail';

      // Act
      const result = isEMailWellFormed(email);

      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe('isStringValueInformed specs', () => {
    it('should return true when field is informed', () => {
      // Arrange
      const field = 'test';

      // Act
      const result = isStringValueInformed(field);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when field is not informed', () => {
      // Arrange
      const field = '';

      // Act
      const result = isStringValueInformed(field);

      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe('isValueNotNullorUndefined specs', () => {
    it('should return false when value is null', () => {
      // Arrange
      const value = null;

      // Act
      const result = isValueNotNullorUndefined(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when value is undefined', () => {
      // Arrange
      const value = undefined;

      // Act
      const result = isValueNotNullorUndefined(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when value is defined', () => {
      // Arrange
      const value = 'test';

      // Act
      const result = isValueNotNullorUndefined(value);

      // Assert
      expect(result).toBeTruthy();
    });
  });
});
