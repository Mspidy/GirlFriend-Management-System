import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import {RatingModule} from 'primeng/rating';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';

import { SplitButtonModule } from 'primeng/splitbutton';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule,
    RatingModule,
    ConfirmDialogModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    SplitButtonModule,
    BrowserModule,
    ToastModule,
    ToolbarModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatDialogModule,
    TableModule,
    DynamicDialogModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    InputMaskModule

   
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
