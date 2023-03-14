import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FeecollectionComponent } from './feecollection/feecollection.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [{ path: '', component: AccountsComponent,
children:[
  {path:'addexpenses',component:AddExpensesComponent},
  {path:'addfees',component:AddFeesComponent},
  {path:'addsalary',component:AddSalaryComponent},
  {path:'expenses',component:ExpensesComponent},
  {path:'feecollection',component:FeecollectionComponent},
  {path:'salary',component:SalaryComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
