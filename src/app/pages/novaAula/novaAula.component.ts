import { Component, OnInit, HostBinding } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudante',
  styleUrls: ['./novaAula.component.scss'],
  templateUrl: './novaAula.component.html',
})
export class NovaAulaComponent extends UpgradableComponent implements OnInit {
  @HostBinding('class.avaliacao-form') private readonly avaliacaoForm = true;

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

  cadastrarNovaAula(): void {
    this.router.navigate(['/app/trilha-estudante'])
  }

}
