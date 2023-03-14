import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { FeecollectionComponent } from './feecollection/feecollection.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SalaryComponent } from './salary/salary.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';


@NgModule({
  declarations: [
    AccountsComponent,
    FeecollectionComponent,
    ExpensesComponent,
    SalaryComponent,
    AddFeesComponent,
    AddExpensesComponent,
    AddSalaryComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
