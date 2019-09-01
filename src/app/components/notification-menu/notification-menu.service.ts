import { Injectable } from '@angular/core';

@Injectable()
export class NotificationMenuService {
  public getNotifications(): object[] {
    return [
      {
        text: 'Seu material foi avaliado.',
        time: 'just now',
        icon: 'plus_one',
        color: 'primary',
      }, {
        text: 'Matemática I - prazo acabando.',
        time: '1 day',
        icon: 'error_outline',
        color: 'secondary',
      }, {
        text: 'Não esqueça as atividades.',
        time: '2 hours',
        icon: 'new_releases',
        color: 'primary',
      }, {
        text: '[Fórum] Sua pergunta foi respondida',
        time: '5 days',
        icon: 'mail_outline',
        color: 'primary',
      },
    ];
  }
}
