import { Injectable } from '@angular/core';

@Injectable()
export class BrowserStatisticsChartService {
  public getBrowserStatistics() {
    return [
      {
        key: 'Finalizou',
        y: 42,
      },
      {
        key: 'Fazendo',
        y: 30,
      },
      {
        key: 'Parado',
        y: 17,
      },
      {
        key: 'Não começou',
        y: 13,
      }
    ];
  }
}
