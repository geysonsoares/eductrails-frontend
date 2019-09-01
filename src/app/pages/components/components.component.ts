import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';
import { TablesService } from '../ui/tables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('class.ui-components') private readonly uiComponents = true;

  public readonly Array = Array;

  
  @HostBinding('class.mdl-cell') private readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') private readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') private readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') private readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') private readonly mdlCellTop = true;
  @HostBinding('class.ui-tables') private readonly uiTables = true;

  public constructor(private tablesService: TablesService, private router: Router) {
    super();
  }

  public readonly sortOrder = {
    asc: 1,
    desc: -1,
  };

  public headers = this.tablesService.getHeaders();
  public simpleTable = this.tablesService.getSimpleTable();
  public borderedTable = this.tablesService.getBorderedTable();
  public strippedTable = this.tablesService.getStrippedTable();
  public borderlessTable = this.tablesService.getBorderlessTable();
  public advancedHeaders = this.tablesService.getAdvancedHeaders();
  public genreColors = {
    'Children\'s book': 'orange',
    'Gothic fiction': 'purple',
    'Horror fiction': 'dark-gray',
    'Fiction': 'green',
    'Novel': 'teal',
    'Fantasy': 'red',
    'Adventure': 'light-blue',
  };

  public currentPage = 1;
  private countPerPage = 4;
  public numPage = this.tablesService.getAdvancedTableNumOfPage(this.countPerPage);

  public advancedTable = this.tablesService.getAdvancedTablePage(1, this.countPerPage);

  public changePage(page, force = false) {
    if (page !== this.currentPage || force) {
      this.currentPage = page;
      this.advancedTable = this.tablesService.getAdvancedTablePage(page, this.countPerPage);
    }
  }

  /* available sort value:
	-1 - desc; 	0 - no sorting; 1 - asc; null - disabled */
  public changeSorting(header, index) {
    const current = header.sort;
    if (current !== null) {
      this.advancedHeaders.forEach((cell) => {
        cell.sort = (cell.sort !== null) ? 0 : null;
      });
      header.sort = (current === 1) ? -1 : 1;
      this.tablesService.changeAdvanceSorting(header.sort, index);
      this.changePage(1, true);
    }
  }

  selecionarAula(): void {
    this.router.navigate(['/app/acessar-conteudo'])
  }

  private data = [
    {
      name: 'Nathan Fillion',
      description: 'Malcolm “Mal” Reynolds',
      image: 'nathan-fillion.png',
    },
    {
      name: 'Gina Torres',
      description: 'Zoe Alleyne Washburne',
      image: 'gina-torres.png',
    },
    {
      name: 'Alan Tudyk',
      description: 'Hoban “Wash” Washburne',
      image: 'tudyk.png',
    },
  ];

  redirecionaEtapaMonitoramento(){
    this.router.navigate(['/app/avaliacao']);
  }
}
