import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-form',
  styleUrls: ['./employer-form.component.scss'],
  templateUrl: 'employer-form.component.html',
})
export class EmployerFormComponent {

  constructor(private router: Router) {
    
  }

  @HostBinding('class.employer-form') private readonly employerForm = true;
  public qualifications = ['Young Padawan', 'Junior', 'Middle', 'Senior'];

  selecionarAula(): void {
    this.router.navigate(['/app/acessar-conteudo'])
  }
  
  cadastrarNovaAula(): void {
    this.router.navigate(['/app/nova-aula'])
  }
}
