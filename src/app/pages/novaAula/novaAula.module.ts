import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { MaterialAngularSelectModule } from 'material-angular-select';
import { ThemeModule } from 'theme';
import { ChartsModule } from '../charts/charts.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MapsModule } from '../maps/maps.module';
import { NovaAulaComponent } from './novaAula.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgFormsModule,
    DashboardModule,
    MapsModule,
    ChartsModule,
    MaterialAngularSelectModule,
  ],
  declarations: [
    NovaAulaComponent
  ],
})
export class NovaAulaModule {}
