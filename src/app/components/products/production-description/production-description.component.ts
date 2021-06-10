import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductionService } from 'src/app/services/production.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-production-description',
  templateUrl: './production-description.component.html',
  styleUrls: ['./production-description.component.scss']
})
export class ProductionDescriptionComponent implements OnInit {
  currentProduction = this.productionService.productionDescription;
  
  constructor(public productionService: ProductionService,public sidenavService: SidenavService) {}


	ngOnInit(): void {
	}

  hideSideNav(){
    this.sidenavService.close();
  }

  getPreviousProduction(index: string){
    if(parseInt(index) === 0){
      index = (this.productionService.productionItems.length - 1).toString();
    }else{
      index = (parseInt(index) - 1).toString();
    }
    console.log(index)
    this.productionService.getProductionDescription(index);
  }

  getNextProduction(index: string){
    if(parseInt(index) === this.productionService.productionItems.length - 1){
      index = '0';
    }else{
      index = (parseInt(index) + 1).toString();
    }
    this.productionService.getProductionDescription(index);
  }
}
