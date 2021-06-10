import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ProductionItem} from 'src/app/interfaces/production-item';
// import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})

export class ProductionService {
  productionDataUrl = 'assets/data/productions.json'
  productionItems: ProductionItem[] = [];
  productionDescription: ProductionItem[] = [];

  // private sidenav: MatSidenav;
  // public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  // public sideNavCloseSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  // public sideNavOpenSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  
  constructor(private http: HttpClient) {
    this.getProductionItems();
  }

  private getProductionItems(){
    return new Promise<void>((resolve, reject) => {
      this.http.get(this.productionDataUrl)
        .subscribe((res: ProductionItem[]) => {
          this.productionItems = res;
          resolve(); 
        });
    });

  }

  getProductionDescription(index: string) {
    this.productionDescription = this.productionItems[index];
    this.productionDescription['index'] = index;
  }

  // public setSidenav(sidenav: MatSidenav) {
  //     this.sidenav = sidenav;
  // }
  // // public sideNavToggle() {
  // //   return this.sideNavToggleSubject.next(null);
  // // } 
  // public sideNavClose() {
  //   return this.sideNavCloseSubject.next(null);
  // } 
  // public sideNavOpen() {
  //   return this.sideNavOpenSubject.next(null);
  // } 
}
