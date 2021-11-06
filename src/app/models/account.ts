export interface AccountEvents {
  data?: AccountEvent[];
}

export interface AccountEvent {
  categoryCode?: string;
  dates?: Dates;
  transaction?: Transaction;
  merchant?: Merchant;
}

export interface Transaction {
  amountCurrency?: AmountCurrency;
  type?: string;
  creditDebitIndicator?: string;
}

export interface AmountCurrency {
  amount?: string;
  currencyCode?: string;
}

export interface Dates {
  valueDate?: number;
}

export interface Merchant {
  name?: string;
  accountNumber?: string;
}
