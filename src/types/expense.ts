export interface Expense {
  id: number;
  name: string;
  month: string;
  date: string;
  paid: "Pago" | "À pagar";
  value: number;
  year: number;
  installments: string;
  notes: string;
};

export interface Message {
  name: string;
  date: string;
  view: string;
};