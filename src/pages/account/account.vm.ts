export interface Account {
  type: string;
  name: string;
}

export const createEmptyAccount = (): Account => ({
  name: '',
  type: ''
});

export interface AccountError {
  type: string;
  name: string;
}
export const createEmptyAccountError = (): AccountError => ({
  name: '',
  type: ''
});
