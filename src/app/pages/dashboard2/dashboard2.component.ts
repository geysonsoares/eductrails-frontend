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
  
  public ngOnInit() { }

  participantes() : void {
    this.router.navigate(['/app/estudantes'])
  }
  
 

}
