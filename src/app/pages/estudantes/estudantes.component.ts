import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UpgradableComponent } from 'theme/components/upgradable';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-estudante',
  styleUrls: ['./estudantes.component.scss'],
  templateUrl: './estudantes.component.html',
})
export class EstudantesComponent extends UpgradableComponent implements OnInit {

  private idCursoSelecionado;

  public ngOnInit() { 
    this.activatedRoute.params.subscribe(params => {
      this.lista = this.data.get(parseInt(params['idCurso']));
    });
  }

  constructor (private router: Router, private activatedRoute: ActivatedRoute){
    super();
  }

  private lista;

  private estudantes1 = [{
                          name: 'Rafael Duarte',
                          description: 'Malcolm “Mal” Reynolds',
                          image: 'card.jpg',
                          progresso: '80',
                          id: 1
                        },
                        {
                          name: 'Latrel',
                          description: 'Zoe Alleyne Washburne',
                          image: 'card.jpg',
                          progresso: '55',
                          id: 2
                        },
                        {
                          name: 'Stefani',
                          description: 'Zoe Alleyne Washburne',
                          image: 'card.jpg',
                          progresso: '55',
                          id: 3
                        },
                        {
                          name: 'Tyago Tayrony',
                          description: 'Malcolm “Mal” Reynolds',
                          image: 'card.jpg',
                          progresso: '80',
                          id: 4
                        },
                        {
                          name: 'Deivison Guarines',
                          description: 'Zoe Alleyne Washburne',
                          image: 'card.jpg',
                          progresso: '55',
                          id: 5
                        },
                        {
                          name: 'Morgan',
                          description: 'Zoe Alleyne Washburne',
                          image: 'card.jpg',
                          progresso: '55',
                          id: 6
                        }];

  private estudantes2 = [{
                          name: 'Gina Torres',
                          description: 'Zoe Alleyne Washburne',
                          image: 'card.jpg',
                          progresso: '55',
                          id: 1
                        },
                        {
                          name: 'Alan Tudyk',
                          description: 'Hoban “Wash” Washburne',
                          image: 'card.jpg',
                          progresso: '93',
                          id: 2
                        },
                        {
                          name: 'Alan Tudyk',
                          description: 'Hoban “Wash” Washburne',
                          image: 'card.jpg',
                          progresso: '93',
                          id: 3
                        }];
          

  private data = new Map([[1, this.estudantes1], [2, this.estudantes2]]);

  selecionarTrilhaEstudante(data: number): void {
    this.router.navigate(['/app/trilha-estudante'])
  }
}
