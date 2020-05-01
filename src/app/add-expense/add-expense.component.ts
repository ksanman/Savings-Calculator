import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  expenseForm = this.fb.group({
    name: ['',  Validators.required],
    amount: ['', Validators.required]
  });

  @Output() done: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService
    ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const name: string = this.expenseForm.get("name").value;
    const amount: number = this.expenseForm.get("amount").value;
    const expense = new Expense(name, amount);
    this.expenseService.add(expense);
    this.done.emit(true);
  }

  cancel(): void {
    this.done.emit(true);
  }

}