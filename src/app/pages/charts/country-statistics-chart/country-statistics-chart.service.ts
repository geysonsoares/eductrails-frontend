import { Injectable } from '@angular/core';

@Injectable()
export class CountryStatisticsChartService {
  public getCountryStatistics() {
    return [
      {
        key: 'Realizado',
        y: 85,
      },
      {
        key: 'Faltando',
        y: 15,
      },
    ];
  }
}
