import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LolchampCreateComponent } from './lolchamp-create/lolchamp-create.component';
import { LolchampEditComponent } from './lolchamp-edit/lolchamp-edit.component';
import { LolchampListComponent } from './lolchamp-list/lolchamp-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lolchamp-list' },
  { path: 'lolchamp-create', component: LolchampCreateComponent },
  { path: 'lolchamp-list', component: LolchampListComponent },
  { path: 'lolchamp-edit/:id', component: LolchampEditComponent },
  { path: "**", component: LolchampListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
