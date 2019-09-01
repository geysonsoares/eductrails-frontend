import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { MaterialAngularSelectModule } from 'material-angular-select';
import { ThemeModule } from 'theme';
import { AvaliacaoFormComponent } from './avaliacao-form';
import { AvaliacaoComponent } from './avaliacao.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgFormsModule,
    MaterialAngularSelectModule,
  ],
  declarations: [
    AvaliacaoComponent,
    AvaliacaoFormComponent,
  ],
  providers: [],
})
export class AvaliacaoModule { }
