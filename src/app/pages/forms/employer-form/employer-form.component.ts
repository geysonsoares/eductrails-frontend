import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employer-form',
  styleUrls: ['./employer-form.component.scss'],
  templateUrl: 'employer-form.component.html',
})
export class EmployerFormComponent implements OnInit {
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.acessoPeloProfessor = params['acessoPeloProfessor'] == "true";
    });
  }

  @HostBinding('class.employer-form') private readonly employerForm = true;
  public qualifications = ['Young Padawan', 'Junior', 'Middle', 'Senior'];

  questionarioRespondido:boolean;
  acessoPeloProfessor:boolean;

  selecionarAula(): void {
    this.router.navigate(['/app/acessar-conteudo'])
  }
  
  cadastrarNovaAula(): void {
    this.router.navigate(['/app/nova-aula'])
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
     if(localStorage.getItem('questionarioRespondido') === 'true'){
      this.questionarioRespondido = true;
     }else{
      this.questionarioRespondido = false;
     }

     localStorage.removeItem('questionarioRespondido');
  } 

  deveExibir(): boolean{
    console.log(this.questionarioRespondido);
    return this.questionarioRespondido;
  }

  isAcessoPeloProfessor(): boolean {
    console.log(this.acessoPeloProfessor);
    return this.acessoPeloProfessor;
  }
}
