import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { SavingsService } from '../savings.service';
import { Observable } from 'rxjs';
import { Saving } from '../saving';
import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';
import { ModalService } from '../modal';

@Component({
  selector: '[app-savings]',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  @Input() netMonthlyIncome: number;
  savings: Observable<Saving[]> = new Observable<Saving[]>();
  expenses: Observable<Expense[]> = new Observable();
  totalExpenses: number = 0.0;

  private addExpensesModalId = 'add-expense-modal';

  constructor(
    private savingsService: SavingsService,
    private expenseService: ExpenseService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.expenses = this.expenseService.expenses;
    this.expenses.subscribe(exs => {
      this.totalExpenses = 0.0;
      exs.forEach(e => this.totalExpenses += e.amount);
    });

    this.savings = this.savingsService.savings;
  }

  getSavedAmount(saving: Saving): number {
   return saving.getSaved(this.netMonthlyIncome);
  }

  getLeftOverSavings(saving: Saving): number {
    return saving.getLeftOver(this.netMonthlyIncome);
  }

  getFinalBalance(saving: Saving): number {
    return this.getLeftOverSavings(saving) - this.totalExpenses;
  }

  openModal(): void {
    this.modalService.open(this.addExpensesModalId);
  }
}