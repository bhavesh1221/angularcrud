import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './crud/add/add.component';
import { EditComponent } from './crud/edit/edit.component';
import { ListComponent } from './crud/list/list.component';
import { ViewComponent } from './crud/view/view.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: ViewComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  // {
  //   path: 'edit',
  //   component: EditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
