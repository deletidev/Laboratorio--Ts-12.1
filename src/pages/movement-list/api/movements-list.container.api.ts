import Axios from 'axios';
// import { AccountApiModel } from './account-list.api-model';
import { AccountApi, MovementListApi } from './movemnts-list.container.api.vm';

const urlMovement = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getMovementsList = (
  accountid: string
): Promise<MovementListApi[]> =>
  Axios.get<MovementListApi[]>(urlMovement, { params: { accountid } }).then(
    response => response.data
  );

export const getAccount = (id: string): Promise<AccountApi> =>
  Axios.get<AccountApi>(`${urlAccount}/${id}`).then(response => response.data);
