import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

import { AppComponent } from './app.component';

import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ModalModule } from './modal/modal.module';
import { ExpenseService } from './expense.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { SavingsService } from './savings.service';
import { SavingsComponent } from './savings/savings.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgxCurrencyModule, 
    ReactiveFormsModule,
    ModalModule 
    ],
  declarations: [ AppComponent, AddExpenseComponent, CalculatorComponent, SavingsComponent],
  bootstrap:    [ AppComponent ],
  providers: [ExpenseService, SavingsService]
})
export class AppModule { }
