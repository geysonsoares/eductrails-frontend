import { Component, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['../charts/charts.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('class.mdl-grid--no-spacing') private readonly mdlGridNoSpacing = true;

  array = [{
    guid: '900ea552-ef68-42cc-b6a6-b8c4dff10fb7',
    age: 32,
    name: 'Powers Schneider',
  },
  {
    guid: '880381d3-8dca-4aed-b207-b3b4e575a15f',
    age: 25,
    name: 'Adrian Lawrence',
  },
  {
    guid: '87b47684-c465-4c51-8c88-3f1a1aa2671b',
    age: 32,
    name: 'Boyer Stanley',
  },]

  redirecinarTrilhaCurso(age){
    console.log('REDIRECIONA ' + age);
  }
}
