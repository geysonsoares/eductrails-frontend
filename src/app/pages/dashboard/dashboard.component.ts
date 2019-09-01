import { Component, HostBinding, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['../charts/charts.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends UpgradableComponent implements OnInit {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('class.mdl-grid--no-spacing') private readonly mdlGridNoSpacing = true;

  constructor(private router: Router) {
      super();
  } 

  cursos = [{
    nome: 'Desenvolvimento Web Completo 2019 - 20 cursos + 20 projetos',
    descricao: 'Domine e aplique em projetos práticos as maiores e principais tecnologias de desenvolvimento web do mercado.',
    qtdAulas: 20,
    horas: 6
  },
  {
    nome: 'Matemática Básica para ENEM e Concursos Públicos',
    descricao: 'Mais de 1900 alunos satisfeitos! Veja os vídeos liberados para entender como funciona',
    qtdAulas: 105,
    horas: 36
  },]

  public ngOnInit() {
  }

  redirecinarTrilhaCurso(){

    this.router.navigate(['/app/trilha-estudante']);

    ///app/trilha-estudante
  }
}
