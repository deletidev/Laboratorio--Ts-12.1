import {
  FieldValidationResult,
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
  isStringValueInformed
} from '@/common';

export const validateTypeField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};
