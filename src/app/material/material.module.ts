import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import {  MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {  MatSelectModule } from '@angular/material/select';
import {  MatCheckboxModule } from '@angular/material/checkbox';
import {  MatDatepickerModule}  from '@angular/material/datepicker';
import {  MatNativeDateModule}  from '@angular/material/core';
import {  MatTabsModule} from '@angular/material/tabs';
import {  MatAutocompleteModule} from '@angular/material/autocomplete';
import {  MatTableModule} from '@angular/material/table';
import {  DragDropModule} from '@angular/cdk/drag-drop';

import {  MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {  MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule

  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTableModule,
    DragDropModule,
    MatProgressSpinnerModule,
    MatPaginatorModule

  ]
})
export class MaterialModule { }
