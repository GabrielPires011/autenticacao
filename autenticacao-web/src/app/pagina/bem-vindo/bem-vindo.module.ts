import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BemVindoRouting} from "./bem-vindo.routing";
import {BemVindoComponent} from "./bem-vindo/bem-vindo.component";

@NgModule({
  declarations: [
    BemVindoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BemVindoRouting
  ],
  exports: [
    BemVindoComponent
  ]
})
export class BemVindoModule { }
