import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-dashboard-2',
  styleUrls: ['./dashboard2.component.scss'],
  templateUrl: './dashboard2.component.html',
})
export class Dashboard2Component extends UpgradableComponent implements OnInit {

  constructor (private router: Router){
    super();
  }

  cursos = [{
    nome: 'Desenvolvimento Web Completo 2019 - 20 cursos + 20 projetos',
    descricao: 'Domine e aplique em projetos práticos as maiores e principais tecnologias de desenvolvimento web do mercado.',
    qtdAulas: 20,
    horas: 6,
    id: 1
  },
  {
    nome: 'Matemática Básica para ENEM e Concursos Públicos',
    descricao: 'Mais de 1900 alunos satisfeitos! Veja os vídeos liberados para entender como funciona',
    qtdAulas: 105,
    horas: 36,
    id: 2
  },]
  
  public ngOnInit() { }

  participantes(idCursoSelecionado) : void {
    this.router.navigate(['/app/estudantes', { idCurso: idCursoSelecionado }]);
  }
}
