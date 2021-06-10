import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {}
  
  ngAfterViewInit(): void {
    console.log(this)
    this.sidenavService.setSidenav(this.sidenav);
  }
  // constructor(public translate: TranslateService) 
  // {
  //   translate.addLangs(['en', 'fr', 'ru']);
  //   translate.setDefaultLang('fr');
  // }
}
