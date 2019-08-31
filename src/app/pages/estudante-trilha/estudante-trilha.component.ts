import { Component, OnInit } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudante',
  styleUrls: ['./estudante-trilha.component.scss'],
  templateUrl: './estudante-trilha.component.html',
})
export class EstudanteTrilhaComponent extends UpgradableComponent implements OnInit {

  public ngOnInit() { }

  constructor (private router: Router){
    super();
  }

  private data = [
    {
      name: 'Nathan Fillion',
      description: 'Malcolm “Mal” Reynolds',
      image: 'nathan-fillion.png',
      progresso: '80',
      id: 1
    },
    {
      name: 'Gina Torres',
      description: 'Zoe Alleyne Washburne',
      image: 'gina-torres.png',
      progresso: '55',
      id: 2
    },
    {
      name: 'Alan Tudyk',
      description: 'Hoban “Wash” Washburne',
      image: 'tudyk.png',
      progresso: '93',
      id: 3
    },
  ];

  selecionarTrilhaEstudante(data: number): void {
    this.router.navigate(['/app/trilha'+data])
  }


}
