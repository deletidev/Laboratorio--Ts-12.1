import * as apiModel from './api';
import * as viewModel from './movement-list.vm';

export const mapInfoAccountFromApiToVm = (
  apiModel: apiModel.AccountApi
): viewModel.InfoAccountVm => ({
  iban: apiModel.iban,
  name: apiModel.name,
  balance: apiModel.balance.toString()
});

const mapMovementFromApiToVm = (
  apiModel: apiModel.MovementListApi
): viewModel.MovementAccountVm => ({
  id: apiModel.id,
  description: apiModel.description,
  amount: apiModel.amount.toString(),
  balance: apiModel.balance.toString(),
  transaction: new Date(apiModel.transaction),
  realTransaction: new Date(apiModel.realTransaction)
});

export const mapMovementsListFromApiToVm = (
  apiModel: apiModel.MovementListApi[]
): viewModel.MovementAccountVm[] =>
  apiModel.map(movement => mapMovementFromApiToVm(movement));
