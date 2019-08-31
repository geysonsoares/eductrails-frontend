import { Injectable } from '@angular/core';

@Injectable()
export class DiscreteBarChartService {
  public getCumulativeReturn() {
    return [
      {
        label: 'Atividade 1',
        value: 5.4,
      },
      {
        label: 'Atividade 2',
        value: 6.5,
      },
      {
        label: 'Atividade 3',
        value: 9.0,
      },
      {
        label: 'Atividade 4',
        value: 5.4,
      },
      {
        label: 'Atividade 5',
        value: 8.7,
      },
      {
        label: 'Atividade 6',
        value: 6.4,
      },
      {
        label: 'Atividade 7',
        value: 9,
      },
    ];
  }
}
