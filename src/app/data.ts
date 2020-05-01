import { Saving } from './saving';
import { Expense } from './expense';

export const SAVINGS: Saving[] = [
  new Saving(10),
  new Saving(15),
  new Saving(20),
  new Saving(25),
  new Saving(30),
  new Saving(35),
  new Saving(40),
  new Saving(45),
  new Saving(50)
];

export const EXPENSES: Expense[] = [
  new Expense("Rent", 970.00),
  new Expense("Car Insurance", 85.00),
  new Expense("Electric", 35.00),
  new Expense("Gas", 45),
  new Expense("Internet", 45),
  new Expense("Trainerroad", 12),
  new Expense("Smithfield Rec", 20),
  new Expense("Student Loan", 77),
  new Expense("IHC", 176)
];
