import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-form',
  styleUrls: ['./employer-form.component.scss'],
  templateUrl: 'employer-form.component.html',
})
export class EmployerFormComponent{
  @HostBinding('class.employer-form') private readonly employerForm = true;
  public qualifications = ['Young Padawan', 'Junior', 'Middle', 'Senior'];

  questionarioRespondido:boolean;

  constructor(private router: Router) {
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
}
