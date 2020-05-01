import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SAVINGS } from './data';
import { Saving } from './saving';
import { ModalService } from './modal';
import { ExpenseService } from './expense.service';
import { Expense } from './expense';
import { Observable, of } from 'rxjs';
 
const TWENTY_SIX_PAYCHECK_CYCLES = 26;
const TWENTY_FOUR_PAYCHECK_CYCLES = 24;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  netPaycheckAmount = new FormControl('0.00');
  netAmount: number = 0.0;
  constructor(private modalService: ModalService) {
  }

  calculate(): void {
    console.log('Calculating', this.netPaycheckAmount.value);
    this.netAmount = this.netPaycheckAmount.value;
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }
}
