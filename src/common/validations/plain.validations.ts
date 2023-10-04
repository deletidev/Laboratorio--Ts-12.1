import validator from 'validator';

export const isValidIban = (iban: string): boolean => validator.isIBAN(iban);

export const isPositiveNumber = (amount: number): boolean => amount > 0;

export const isDateAfterToday = (date: string): boolean => {
  const actualDate = new Date().toISOString().split('T')[0];

  //creo fechas con los string por no comparar dos strings (aunque funciona bien)
  //El igual seria porque al poner una fecha ya al usuario es más facil
  // elegir el dia de hoy que cambiarlo a reset
  return new Date(date) >= new Date(actualDate);
};

export const isEMailWellFormed = (email: string): boolean =>
  validator.isEmail(email);

export const isStringValueInformed = (field: string): boolean => field !== '';

export const isValueNotNullorUndefined = <T>(value: T): boolean =>
  value !== undefined && value !== null;
