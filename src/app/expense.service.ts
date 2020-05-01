import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from './expense';
import { EXPENSES } from './data';

@Injectable()
export class ExpenseService {
  private _expenses = new BehaviorSubject<Expense[]>([]);
  private dataStore: { expenses: Expense[] } = { expenses: []};

  constructor() { 
    EXPENSES.forEach(ex => this.add(ex));
  }

  get expenses(): Observable<Expense[]> {
    return this._expenses.asObservable();
  }

  public add(expense: Expense): void {
    this.dataStore.expenses.push(expense);
    this._expenses.next(Object.assign({}, this.dataStore).expenses);
  }
}