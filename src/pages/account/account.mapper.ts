import * as apiModel from './api';
import * as viewModel from './account.vm';

export const mapAccountInfoFromVmToApi = (
  account: viewModel.Account
): apiModel.Account => ({ name: account.name, type: account.type });
