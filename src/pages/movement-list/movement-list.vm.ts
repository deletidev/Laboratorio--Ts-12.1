export interface InfoAccountVm {
  iban: string;
  name: string;
  balance: string;
}

export interface MovementAccountVm {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: Date;
  realTransaction: Date;
}

export const createEmptyInfoAccountVm = () => ({
  iban: '',
  name: '',
  balance: ''
});
