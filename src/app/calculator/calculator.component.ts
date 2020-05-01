import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { SavingsService } from '../savings.service';
import { Observable } from 'rxjs';
import { Expense } from '../expense';
import { Saving } from '../saving';
import { ModalService } from '../modal';

const MONTHS_IN_YEAR = 12;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit, OnChanges {
  @Input() netPaycheck: number;
  @Input() paycheckCycles: number;

  hasResult: boolean = false;
  yearlyNet = 0.0;
  monthlyNet = 0.0;
  totalExpenses = 0.0;
  savingsCols = 0;

  constructor(
  ) { }

  ngOnInit() {
    this.hasResult = false;
  }

  ngOnChanges() {
    this.yearlyNet = this.netPaycheck * this.paycheckCycles;
    this.monthlyNet = this.yearlyNet / MONTHS_IN_YEAR;
    this.hasResult = true;
  }

  getLeftOver(saving: Saving): number {
   return saving.getLeftOver(this.monthlyNet) - this.totalExpenses;
  }

  updateColumns(cols: number): void {
    this.savingsCols = cols;
  }
}