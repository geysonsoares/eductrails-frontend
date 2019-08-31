import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialAngularSelectModule } from 'material-angular-select';
import { ThemeModule } from 'theme';

import { ChartsModule } from '../charts/charts.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MapsModule } from '../maps/maps.module';
import { EstudanteTrilhaComponent } from './estudante-trilha.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    DashboardModule,
    MapsModule,
    ChartsModule,
    MaterialAngularSelectModule,
  ],
  declarations: [
    EstudanteTrilhaComponent
  ],
})
export class EstudanteTrilhaModule {}
