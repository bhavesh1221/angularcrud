import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { ViewComponent } from './crud/view/view.component';
import { EditComponent } from './crud/edit/edit.component';
import { ListComponent } from './crud/list/list.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './crud/add/add.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ViewComponent,
    EditComponent,
    ListComponent,
    AddComponent,
    ReactiveformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
