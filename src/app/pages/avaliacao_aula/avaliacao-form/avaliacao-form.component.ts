import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao-form',
  styleUrls: ['./avaliacao-form.component.scss'],
  templateUrl: 'avaliacao-form.component.html',
})
export class AvaliacaoFormComponent{
  @HostBinding('class.avaliacao-form') private readonly avaliacaoForm = true;
  public qualifications = ['Young Padawan', 'Junior', 'Middle', 'Senior'];

  constructor(private router: Router) {
  }
  
  redirecinarTrilhaCurso(){

    localStorage.setItem('questionarioRespondido', 'true');
    this.router.navigate(['/app/trilha-estudante']);
  }
}
